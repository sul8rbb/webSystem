<template>
  <div class="wrapper">
    <div class="titleStyle spanSize">{{this.$route.name}}</div>
    <div class="mtables">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.name" :disabled="dis"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.pass" type="password" :disabled="dis"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" v-if="isShow">
          <el-input v-model="form.repass"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="form.sex" label="男" :disabled="dis">男</el-radio>
          <el-radio v-model="form.sex" label="女" :disabled="dis">女</el-radio>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="form.idx" :disabled="dis"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input v-model="form.des"></el-input>
        </el-form-item>

        <el-form-item label="生日">
          <el-col :span="11">
            <el-date-picker
              :disabled="dis"
              type="date"
              placeholder="选择日期"
              v-model="form.time"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click="registe()">{{btn}}</el-button>
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
import checkEmpty from "../../common/js/checkEmpty";
export default {
  components: {
    vBack
  },
  props: [],
  data() {
    return {
      type: "",
      id: "",
      btn: "",
      isShow: true,
      dis: false,
      form: {
        name: "",
        pass: "",
        repass: "",
        tel: "",
        email: "",
        sex: "1",
        idx: "",
        des: "",
        time: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    registe() {
      if (this.type == "0") {
        if (!checkEmpty.ckEmpty(this.form)) {
          this.$message({
            message: "以上内容均为必填项，请检查是否全部填写！",
            type: "warning"
          });
          return;
        }
        if (!checkEmpty.checkEmail(this.form.email)) {
          this.$message({
            message: "请检查邮箱是否填写正确！",
            type: "warning"
          });
          return;
        }
        if (!checkEmpty.checkTel(this.form.tel)) {
          this.$message({
            message: "请检查手机号码是否填写正确！",
            type: "warning"
          });
          return;
        }
        if (!checkEmpty.checkIdx(this.form.idx)) {
          this.$message({
            message: "请检查身份证号是否填写正确！",
            type: "warning"
          });
          return;
        }

        if (this.form.pass != this.form.repass) {
          this.$message({
            message: "请检查两次密码输入是否一致！",
            type: "warning"
          });
          return;
        }
        //注册用户
        fn.ajax(this, API.addUser, this.form, "get", d => {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.$router.push("/index/userManager");
        });
      } else {
        //更新用户
        delete this.form.idx;
        delete this.form.sex;
        delete this.form.time;
        delete this.form.repass;
        this.form.id = this.id;
        fn.ajax(this.API.updateUser, this.form, "get", d => {
          this.$message({
            message: d.data.info,
            type: "success"
          });
          this.$router.push("/index/userManager");
        });
      }
    }
  },
  mounted() {
    this.type = this.$route.params.type;
    this.id = this.$route.params.id;
    if (this.type == "0") {
      this.btn = "注册";
    } else {
      this.dis = true;
      this.btn = "修改";
      this.isShow = false;
      var id = this.id;
      fn.ajax(this, API.findUser, { id }, d => {
        this.form.name = d.data.data[0].name;
        this.form.pass = d.data.data[0].pass;
        this.form.repass = d.data.data[0].pass;
        this.form.tel = d.data.data[0].tel;
        this.form.email = d.data.data[0].email;
        this.form.sex = d.data.data[0].sex;
        this.form.idx = d.data.data[0].idx;
        this.form.des = d.data.data[0].des;
        this.form.time = d.data.data[0].time;
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
</style>
