'use strict'

const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')
const proxyConf = require('./proxy.config')
const apiMocker = require('mocker-api')

// 是否为生产环境
const isProduction = process.env.NODE_ENV !== 'development'

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    proxy: proxyConf,
    before (app) {
      apiMocker(app, path.resolve('./mock/index.js'))
    },
    disableHostCheck: true
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'Vue UI'
        return args
      })
    if (process.env.NODE_ENV === 'production') {
      if (process.env.npm_config_report) {
        config
          .plugin('webpack-bundle-analyzer')
          .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
          .end()
      }
      // 移除 prefetch 插件
      config.plugins.delete('prefetch')
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: isProduction
            }
          }
        })
      ]
    }
  },
  css: {
    // css预设器配置项
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // 引入全局变量样式，@ 是我们设置的别名，执行 src 目录
        prependData: '@import "~@/styles/variables.scss";'
      }
    }
  }
}
