const os = require('os')

const networkInterfaces = os.networkInterfaces()
let ip = ''
for (const networkInterface of Object.values(networkInterfaces)) {
  networkInterface.forEach(alias => {
    if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
      ip = alias.address
    }
  })
}

const proxyObj = {}

// 与开发联调的时候由于未知 需手动填写
const devHostName = 'xxx.xx.x.xx'
const devServerPort = '8085'
// 代理路由表
const PROXY_ROUTER = {
  '127.0.0.1': 'https://nei.hz.netease.com/api/apimock-v2/415dac7f87d1f28c8e46fca82beb1b23', // 代理到nei环境
  'proxy.netease.com': 'https://ssc.netease.com/', // 代理到测试环境
  [ip]: `http://${devHostName}:${devServerPort}` // 代理到后端的ip环境
}

// 代理接口
const proxyTable = {
  '/api': ''
}

Object.entries(proxyTable).forEach(([key, value], index) => {
  proxyObj[key] = {
    target: value || 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite (path, req) {
      return path.replace(/\/api/, '')
    },
    router (req) {
      const hostname = req.headers.host.split(':')[0]
      return PROXY_ROUTER[hostname] || 'http://localhost:8080'
    }
  }
})

module.exports = proxyObj
