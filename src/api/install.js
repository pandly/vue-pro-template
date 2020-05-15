import { get, post } from './base'

export const install = function (Vue, config = {}) {
  Vue.prototype.$_get = get
  Vue.prototype.$_post = post
}
