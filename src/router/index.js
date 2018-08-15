import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index/index'
import Login from '@/views/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: 'login',
        name: 'Login'
        // components: {
        //   a: Login,
        //   b: Login
        // }
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
