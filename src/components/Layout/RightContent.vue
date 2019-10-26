<template>
  <el-container>
    <!-- 头部 -->
    <el-header>Header</el-header>
    <!-- 主体 -->
    <el-main>
      <!-- 路由出口 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    background-color: #fff;
    line-height: 60px;
  }
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>