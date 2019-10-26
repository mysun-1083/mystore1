<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>用户登录</span>
      </div>

      <el-form ref="form" :model="loginForm" label-width="80px" :rules="rules">
        <!-- 用户名 -->
        <el-form-item label="用户名" prop="account">
          <el-input v-model="loginForm.account" clearable></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" clearable show-password></el-input>
        </el-form-item>
        <!-- 登录 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { checkLogin } from "../api/api";

export default {
  data() {
    return {
      loginForm: {
        account: "",
        password: ""
      },
      rules: {
        account: [
          { required: true, message: "用户名错误", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  // 非空验证
  methods: {
    submitForm(form) {
      this.$refs.form.validate( async valid => {
        if (valid) {
            // 发送登陆的请求
          let data = await checkLogin(this.loginForm);
          if (data.data.code === 0) {
            console.log("登录成功")
            // 路由跳转
            this.$router.push("/home")
          }
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: #0091e6;
  .el-card {
    width: 400px;
    height: 300px;
    position: absolute;
    width: 600px;
    height: 300px;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
  }
  .el-button {
    width: 400px;
  }
}
</style>