import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouters from './modules'
import BasicLayout from '../layouts/BasicLayout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/navigation2/option5',
    component: BasicLayout,
    children: configRouters
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  document.title = title ? `${title} | Vue UI` : 'Vue UI'
  next()
})

router.afterEach((to, from, next) => {})

export default router
