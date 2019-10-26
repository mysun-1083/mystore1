<template>
  <el-aside width="200px">
    <el-menu
      :default-active="$route.path"
      router
      unique-opened
      background-color="#304156"
      text-color="#fff"
    >
      <!-- 后台首页 -->
      <el-menu-item index="/home">
        <i class="iconfont icon-shouye"></i>
        <span slot="title">后台首页{{$route.path}}</span>
      </el-menu-item>

      <!-- 订单管理 -->
      <el-menu-item index="/home/ordermanage">
        <i class="iconfont icon-dingdan"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>

      <!-- 商品管理 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont icon-shangpin"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/home/goodslist">商品列表</el-menu-item>
        <el-menu-item index="/home/goodsadd">添加商品</el-menu-item>
      </el-submenu>

      <!-- 店铺管理 -->
      <el-menu-item index="/home/shopmanage">
        <i class="iconfont icon-dianpu"></i>
        <span slot="title">店铺管理</span>
      </el-menu-item>

      <!-- 账号管理 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="iconfont icon-zhanghao2"></i>
          <span>账号管理</span>
        </template>
        <el-menu-item index="/home/accountlist">账号列表</el-menu-item>
        <el-menu-item index="/home/accountadd">添加账号</el-menu-item>
        <el-menu-item index="/home/passwordmodify">修改密码</el-menu-item>
      </el-submenu>

      <!-- 销售统计 -->
      <el-submenu index="6">
        <template slot="title">
          <i class="iconfont icon-tongji"></i>
          <span>销售统计</span>
        </template>
        <el-menu-item index="/home/goodstotal">商品统计</el-menu-item>
        <el-menu-item index="/home/ordertotal">订单统计</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {};
</script>

<style lang="less">
.el-aside {
  background-color: #304156;
  .el-menu {
    border: none;
    .el-menu-item {
      .iconfont {
        color: #eee;
        margin: 10px;
      }
    }

    .el-submenu {
      .iconfont {
        color: #eee;
        margin: 10px;
      }
      .el-menu-item {
        background-color: #202f3f !important;
      }
    }
  }
}
</style>