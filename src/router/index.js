import Vue from 'vue'
import Router from 'vue-router'
import {getToken} from "../utils/cookies";

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
      path: '/collection',
      name: 'collection',
      component: () => import('@/views/Collection')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/User'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/register/Register')
    },
    {
      path: '/teaDetail/:id',
      name: 'teaDetail',
      component: () => import('@/components/teaDetail/teaDetail')
    },
    {
      path: '*',
      redirect: '/home'
    },
    //user下
    {
      path: '/user/file',
      name: 'file',
      component: () => import('@/views/User/file'),
    },
  ]
  
})
router.beforeEach((to,from,next)=>{
  console.log('router before each',to);
  let token = getToken('token')
  // debugger
  if(to.path=="/collection"){
      if(token){
        next();
      }else{
        //已经登录过
        next('/login');//直接跳转到首页
      }
  }else{
      next();
  }
  
});


export default router
