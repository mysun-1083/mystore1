<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h3>添加账号</h3>
        <el-form
          :model="accaddForm"
          status-icon
          :rules="rules"
          ref="accaddForm"
          label-width="100px"
          class="demo-accaddForm"
        >
          <el-form-item label="用户名" prop="account">
            <el-input v-model="accaddForm.account" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="accaddForm.password" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="accaddForm.checkPass" autocomplete="off"></el-input>
          </el-form-item>

          <el-form-item label="活动区域">
            <el-select v-model="accaddForm.userGroup" placeholder="请选择身份">
              <el-option label="管理员" value="guanliyuan"></el-option>
              <el-option label="超级管理员" value="chaoji"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm(accaddForm)">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
import { addAccount } from "../../../api/api";
export default {
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }else{
        callback();
      }
    };

    var validatePass = (rule, value, callback) => {
      console.log(value)
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        if (this.accaddForm.checkPass !== "") {
          this.$refs.accaddForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.accaddForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      accaddForm: {
        account: "",
        password: "",
        checkPass: "",
        userGroup: "管理员"
      },
      rules: {
        account: [
          { validator: checkUserName, trigger: "blur" },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(accaddForm) {
      this.$refs.accaddForm.validate(async valid => {
        console.log(valid)
        if (valid) {
          let { data } = await addAccount(this.accaddForm);
          if (data.code === 0) {
            alert("添加账号成功");
          }else{
            alert(data)
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>