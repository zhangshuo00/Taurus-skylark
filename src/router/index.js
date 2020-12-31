import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import(),
    redirect: '/login',
    name: '登录页'
  },
  {
    path: '/login',
    component: () => import(),
    hidden: true,
    name: '登录页'
  },
  // 404 page must be placed at the end
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
