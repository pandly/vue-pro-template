import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { install as Axios } from './api/install'
{{#if_eq import "full"}}
import {{alias}} from '{{UI}}'
import '{{css}}'
{{/if_eq}}
{{#if_eq import "demand"}}
{{#if_eq UI "view-design"}}
import '{{css}}'
{{/if_eq}}
{{/if_eq}}
{{#if_eq import "demand"}}
import {
  Menu{{#unless_eq UI "ant-design-vue"}},
  Submenu,
  MenuItem{{/unless_eq}}{{#unless_eq UI "element-ui"}},
  Icon{{/unless_eq}}
} from '{{UI}}'
{{/if_eq}}

{{#if_eq import "full"}}
Vue.use({{alias}})
{{/if_eq}}
{{#if_eq import "demand"}}
{{#unless_eq UI "view-design"}}
Vue.use(Menu)
{{#if_eq UI "element-ui"}}
Vue.use(Submenu)
Vue.use(MenuItem)
{{/if_eq}}
{{#if_eq UI "ant-design-vue"}}
Vue.use(Icon)
{{/if_eq}}
{{/unless_eq}}
{{#if_eq UI "view-design"}}
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
{{/if_eq}}
{{/if_eq}}
Vue.use(Axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
