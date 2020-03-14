import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import jump from '@/views/common/jump'
import HOME from '@/views/Home'
import Login from '@/views/Login'

Vue.use(Router)

// eslint-disable-next-line no-unused-vars
function require (strings, resolve) {
  return undefined
}

export default new Router({
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
    // {
    //   path: '/liuliuliu',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/jump',
      meta: {
        title: '跳转请稍等'
      },
      component: jump
    }
  ]
})
