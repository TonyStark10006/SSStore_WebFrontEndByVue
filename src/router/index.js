import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/views/index/index1'
// import Login from '@/views/login/login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: 'login1',
        name: 'Login1'
        // components: {
        //   a: Login,
        //   b: Login
        // }
      }]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/panel',
      name: 'Panel',
      component: () => import('../views/panel/panel.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('这里是前置路由')
  next({
    name: Index
  })
})

export default router
