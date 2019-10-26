import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
Vue.use(VueRouter)

const routes = [
  //登录页
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {//首页路由
    path: '/home',
    name: 'home',
    component: () => import( '../pages/Home.vue'),
    //首页二级路由
    children:[
      {path:'',component:()=>import('../pages/home/goods/Goodsacc.vue')},
      {path:'goodsacc',component:()=>import('../pages/home/goods/Goodsacc.vue')}, //商品管理-商品管理
      {path:'goodsadd',component:()=>import('../pages/home/goods/Goodsadd.vue')}, //商品管理-添加商品
      {path:'accmanger',component:()=>import('../pages/home/account/Accmanger.vue')},//账号管理-账号管理
      {path:'accpwd',component:()=>import('../pages/home/account/Accpwd.vue')},//账号管理-修改密码
      {path:'accadd',component:()=>import('../pages/home/account/Accadd.vue')},//账号管理-修改密码
      {path:'inventorymanger',component:()=>import('../pages/home/inventory/Inventorymanger.vue')},//进货管理-库存管理
      {path:'inventoryadd',component:()=>import('../pages/home/inventory/Inventoryadd.vue')},//进货管理-添加库存
    
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
