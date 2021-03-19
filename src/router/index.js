import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/home/index'),
      meta: { title: '推荐', icon: 'el-icon-mobile' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '消息', icon: 'el-icon-bell' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '评论', icon: 'el-icon-chat-dot-square' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '私信', icon: 'el-icon-message' }
      }
    ]
  },

  {
    path: '/subscriptions',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Subscriptions',
        component: () => import('@/views/subscriptions/index'),
        meta: { title: '话题', icon: 'el-icon-collection-tag' }
      }
    ]
  },

  {
    path: '/settings',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Settings',
        component: () => import('@/views/settings/index'), // Parent router-view
        meta: { title: '设置', icon: 'el-icon-s-operation' },
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'UserInfo',
        component: () => import('@/views/user/userInfo/index'),
        meta: { title: '我的', icon: 'el-icon-user' }
      }
    ]
  },

  // 写文章跳转到编辑器页面，在新标签页中打开链接
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: '写文章', icon: 'el-icon-edit-outline' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
