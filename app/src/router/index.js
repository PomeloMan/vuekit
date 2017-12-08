import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      components: {
        container: () => import(/* webpackChunkName: "group-login" */ '@/views/login')
      }
    },
    {
      path: '/',
      redirect: { name: 'index' }
      // redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        requireAuth: true
      },
      components: {
        header: () => import(/* webpackChunkName: "group-main" */ '@/components/header'),
        container: () => import(/* webpackChunkName: "group-main" */ '@/views/index')
      }
    },
    {
      path: '/test',
      meta: {
        requireAuth: true
      },
      components: {
        header: () => import(/* webpackChunkName: "group-main" */ '@/components/header'),
        container: () => import(/* webpackChunkName: "group-main" */ '@/components/test')
      }
    },
    {
      path: '/test1',
      components: {
        header: () => import(/* webpackChunkName: "group-main" */ '@/components/header'),
        container: () => import(/* webpackChunkName: "group-main" */ '@/components/test1')
      }
    }
  ]
})

export default router
