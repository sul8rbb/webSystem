<template>
  <div class="wrapper">
    <div class="loginForm">
      <h3 class="text-center">登录</h3>
      <el-form :model="user" ref="user" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户角色" prop="type">
          <el-select class="ipt" v-model="user.type" placeholder="请选择用户角色">
            <el-option label="超级管理员" value="0"></el-option>
            <el-option label="普通管理员" value="1"></el-option>
            <el-option label="用户" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input class="ipt" v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input class="ipt" v-model="user.pass" @keyup.enter.native="login"></el-input>
        </el-form-item>
        <el-form-item class="text-center">
          <el-button type="primary" @click="login()">登录</el-button>&nbsp;&nbsp;
          <el-button @click="resetForm('user')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      user: {
        name: "",
        type: "",
        pass: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    login() {
      this.$http({
        url: API.login,
        method: "post",
        data: this.user
      }).then(d => {
        if (d.data.isok) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.$router.replace("/index");
          localStorage.clear();
          localStorage.setItem("role", d.data.isAdmin);
          localStorage.setItem("neck", this.user.name);
        } else {
          this.$message.error(d.data.info);
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.loginForm {
  position: absolute;
  top: 30%;
  left: 30%;
}

.loginForm div {
  margin: 10px;
}

.wrapper {
  background: url('../../../static/css/timg.jpg') center center no-repeat;
  width: 100%;
  height: 100vh;
}

.loginForm {
  padding-top: 20px;
  padding-right: 20px;
  height: 340px;
  width: 500px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

.ipt {
  width: 80%;
  display: block;
  margin: 10px auto;
}

.wrapper >>> .el-form-item__label {
  color: white;
}

h3 {
  font-size: 30px;
  color: white;
}
</style>
