<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1>商品管理</h1>
      </div>
      <el-form :form="true" :model="form" class="demo-form-inline">

        <el-form-item >
          <el-select v-model="form.select" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="关键字" style="display:flex;margin-left:30px;" >
          <el-input v-model="form.user" placeholder="审批人"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        select: "请选择分类"
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
.demo-form-inline {
  display: flex;
  .el-button{
      margin-left: 20px;
  }
  
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  height: 100%;
}
</style>