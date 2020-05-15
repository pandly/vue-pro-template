module.exports = {
  {{#if_eq import "demand"}}
  plugins: [
    {{#if_eq UI "element-ui"}}
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
    {{/if_eq}}
    {{#if_eq UI "view-design"}}
    [
      'import',
      {
        libraryName: 'view-design',
        libraryDirectory: 'src/components'
      }
    ]
    {{/if_eq}}
    {{#if_eq UI "ant-design-vue"}}
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: 'css'
      }
    ]
    {{/if_eq}}
  ],
  {{/if_eq}}
  presets: [
    {{#if_eq import "demand"}}
    ['@babel/preset-env', { modules: false }],
    {{/if_eq}}
    '@vue/cli-plugin-babel/preset'
  ]
}
