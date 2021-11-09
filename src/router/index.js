import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home')
  },
  {
    path: '/catalog',
    component: () => import('../views/catalog')
  },
  {
    path: '/car',
    component: () => import('../views/car')
  },
  {
    path: '/profile',
    component: () => import('../views/profile')
  }
]

export default new Router({
  mode: 'history',
  routes
})