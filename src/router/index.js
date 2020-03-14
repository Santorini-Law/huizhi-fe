import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import error404 from '@/views/common/error404'
import HOME from '@/views/Home'
import Login from '@/views/Login'

Vue.use(Router)

// eslint-disable-next-line no-unused-vars
function require (strings, resolve) {
  return undefined
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: HOME,
      meta: {
        auth: true
      },
      name: 'Home'
    }, // 首页
    {
      path: '/Login',
      component: Login,
      meta: {
        auth: false
      },
      name: 'Login'
    }, // 注册登录
    {
      path: '/liuliuliu',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/404',
      meta: {
        title: '404444'
      },
      component: error404
    },
    {
      path: '/home',
      meta: {
        title: 'home'
      },
      component: error404
    }
  ]
})
