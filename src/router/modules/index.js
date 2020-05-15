const files = require.context('.', false, /\.js$/)

let configRouters = []

files.keys().forEach(key => {
  if (key === './index.js') return
  configRouters = configRouters.concat(files(key).default)
})

export default configRouters
