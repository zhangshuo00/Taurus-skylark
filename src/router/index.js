import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: '首页'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
    name: '登录页'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index'),
    hidden: true,
    name: '首页'
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

export default router
