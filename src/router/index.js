

import Vue from 'vue'
import VueRouter from 'vue-router'
const cat = ()=>import('../views/cart/cat')
const cg = ()=>import('../views/catg/cg')
const hom = ()=>import('../views/home/hom')
const pro = ()=>import('../views/profile/pro')
const Detail = ()=>import('../views/detail/Detail')

Vue.use(VueRouter)
const routes=[
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/cart',
      component:cat
    },
    {
      path:'/catg',
      component:cg
    },
    {
      path:'/profile',
      component:pro
    },
    {
      path:'/home',
      component:hom
    },
    {
      path:'/detail/:iid',
      component:Detail
    }
  ]
  const router = new VueRouter({
  routes,
  mode:'history'
  })
  export default router

