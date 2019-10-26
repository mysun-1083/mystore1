import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/Home.vue'),
    children: [
      // 后台首页
      {
        path: '',
        component: () => import('../views/Index.vue'),
      },
      // 订单管理
      {
        path: '/home/ordermanage',
        component: () => import('../views/OrderManage.vue'),
      },
      // 商品管理
      {
        path: '/home/goodslist',
        component: () => import('../views/GoodsManage/GoodsList.vue'),
      },
      {
        path: '/home/goodsadd',
        component: () => import('../views/GoodsManage/GoodsAdd.vue'),
      },
      // 店铺管理
      {
        path: '/home/shopmanage',
        component: () => import('../views/ShopManage.vue'),
      },
      // 账号管理
      {
        path: '/home/accountList',
        component: () => import('../views/AccountManage/AccountList.vue'),
      },
      {
        path: '/home/accountadd',
        component: () => import('../views/AccountManage/AccountAdd.vue'),
      },
      {
        path: '/home/passwordmodify',
        component: () => import('../views/AccountManage/PasswordModify.vue'),
      },
      // 销售统计
      {
        path: '/home/goodstotal',
        component: () => import('../views/SalesTotal/GoodsTotal.vue'),
      },
      {
        path: '/home/ordertotal',
        component: () => import('../views/SalesTotal/OrderTotal.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
export default router
