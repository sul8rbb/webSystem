<template>
  <div class="wrapper">
    <div class="titleStyle spanSize">{{this.$route.name}}</div>
    <div class="mtables">
      <el-form
        :model="user"
        ref="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="name">
          <el-input v-model="user.name" :disabled="dis"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="user.pass" type="password" :disabled="dis"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="repass" v-if="isShow">
          <el-input v-model="user.repass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="属性" prop="prop">
          <el-input v-model="user.prop"></el-input>
        </el-form-item>
        <el-form-item label="注册时间">
          <el-col :span="11">
            <el-form-item prop="time">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="user.time"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click="registe('ruleForm')">{{btn}}</el-button>
          <v-back></v-back>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import vBack from "../../components/common/back";
import API from "../../common/js/API";
import fn from "../../common/js/fn";

export default {
  components: {
    vBack
  },
  props: [],
  data() {
    return {
      isShow: true,
      btn: "",
      dis: false,
      user: {
        name: "",
        pass: "",
        repass: "",
        prop: "",
        time: ""
      },
      rules: {
        name: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pass: [{ required: true, message: "请输入密码", trigger: "blur" }],
        repass: [
          { required: true, message: "请输入确认密码", trigger: "blue" }
        ],
        prop: [{ required: true, message: "请输入属性", trigger: "blur" }]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    registe(ruleForm) {
      var type = this.$route.params.type;
      var id = this.$route.params.id;
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          if (type == "0") {
            if (this.user.pass != this.user.repass) {
              this.$message.error("两次密码输入的不一致，请重试！");
              return;
            } else {
              //新增管理员
              fn.ajax(this, API.addManager, this.user, "get", d => {
                this.$message({
                  message: d.data.info,
                  type: "success"
                });
                this.$router.replace("/index/adminManager");
              });
            }
          } else {
            delete this.user.repass;
            delete this.user._id;
            this.user.id = id;
            //更新管理员
            fn.ajax(this, API.updateManager, this.user, "get", d => {
              this.$message({
                message: d.data.info,
                type: "success"
              });
              this.$router.push("/index/adminManager");
            });
          }
        } else {
          return false;
        }
      });
    }
  },
  mounted() {
    var type = this.$route.params.type;
    var id = this.$route.params.id;
    if (type == "0") {
      this.btn = "注册";
    } else {
      this.dis = true;
      this.btn = "修改";
      this.isShow = false;

      fn.ajax(this, API.findManager, { id }, "get", d => {
        this.user = d.data.data[0];
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.diss {
}
</style>
