<template>
  <div class="home">
    <el-container>
      <!-- 头部 -->
      <el-header style="height:40px;">Header</el-header>
      <!-- 侧栏 -->
      <el-container>
        <el-aside width="220px">
          <el-menu
            default-active="/home/goodsacc"
            router
            unique-opened
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <!-- 带子级  -->
            <el-submenu :index="menu.index" v-for="menu in datalist" :key="menu.index">
              <!-- 菜单名称 -->
              <template slot="title">
                <i :class="menu.cls"></i>
                <span>{{menu.title}}</span>
              </template>

              <!-- 子集菜单项目 -->
              <el-menu-item v-for="item in menu.children" :index="item.index" :key="item.index">
                <span slot="title">{{item.name}}</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- 主体 -->
        <el-main>
            <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 动态菜单创建
      datalist: [
        {
          index: "1",
          cls: "el-icon-s-cooperation",
          title: "商品管理",
          children: [
            { index: "/home/goodsacc", name: "商品管理" },
            { index: "/home/goodsadd", name: "添加管理" }
          ]
        },
        {
          index: "2",
          cls: "el-icon-s-goods",
          title: "账号管理",
          children: [
            { index: "/home/accmanger", name: "账号管理" },
            { index: "/home/accpwd", name: "修改密码" },
            { index: "/home/accadd", name: "增加账号" }
          ]
        },
        {
          index: "3",
          cls: "el-icon-circle-plus",
          title: "进货管理",
          children: [
            { index: "/home/inventorymanger", name: "库存管理" },
            { index: "/home/inventoryadd", name: "添加库存" }
          ]
        },
        {
          index: "4",
          cls: "el-icon-remove",
          title: "出货管理",
          children: [
            { index: "/home/clear", name: "销售列表" },
            { index: "/home/clearout", name: "商品出库" },
            { index: "/home/clearback", name: "商品退货" }
          ]
        },
        {
          index: "5",
          cls: "el-icon-s-data",
          title: "统计管理",
          children: [
            { index: "/home/sta", name: "销售统计" },
            { index: "/home/stocksta", name: "进货统计" }
          ]
        },
        {
          index: "6",
          cls: "el-icon-s-custom",
          title: "会员管理",
          children: [
            { index: "/home/xxxx", name: "账号管理" },
            { index: "/home/yyyyy", name: "添加账号" }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-menu {
    border: none;
    height: 100%;
  }
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #242f41;
  color: #333;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
</style>