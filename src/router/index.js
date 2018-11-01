import Vue from 'vue'
import Router from 'vue-router'

/**
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
 **/
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      // redirect: '/home',
      component: () => import('@/views/home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/nineToNie',
      name: 'nineToNie',
      component: () => import('@/views/NineToNie')
    },
    {
      path: '/sort',
      name: 'sort',
      component: () => import('@/views/Sort')
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

export default router
