<template>
  <div class="wrapper">
    <div class="titleStyle spanSize">{{this.$route.name}}</div>
    <div class="mtables">
      <el-form
        :model="ruleForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="题目" prop="tit">
          <el-input type="text" v-model="ruleForm.tit" autocomplete="off" :disabled="dis"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="con">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            :disabled="dis"
            v-model="ruleForm.con"
          ></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-col :span="11">
            <el-form-item prop="time">
              <el-date-picker
                :disabled="dis"
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.time"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click="sent()" v-if="isShow">{{btn}}</el-button>
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
      btn: "",
      dis: false,
      isShow: true,
      ruleForm: {
        tit: "",
        con: "",
        time: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    sent() {
      if (this.type == "0") {
        if (!checkEmpty.ckEmpty(this.ruleForm)) {
          this.$message({
            message: "以上内容均为必填项，请检查是否全部填写！",
            type: "warning"
          });
          return;
        }
        fn.ajax(this, API.addMessage, this.ruleForm, "get", d => {
          if (d.data.isok) {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.$router.push("/index/message");
          }
        });
        // this.$http({
        //   url: API.addMessage,
        //   params: this.ruleForm
        // }).then(d => {
        //   if (d.data.isok) {
        //     this.$message({
        //       message: d.data.info,
        //       type: "success"
        //     });
        //     this.$router.push("/index/message");
        //   }
        // });
      } else {
        this.ruleForm.id = this.id;

        fn.ajax(this, API.updateMessage, this.ruleForm, "get", d => {
          if (d.data.isok) {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.$router.push("/index/message");
          }
        });
        // this.$http({
        //   url: API.updateMessage,
        //   params: this.ruleForm
        // }).then(d => {
        //   if (d.data.isok) {
        //     this.$message({
        //       message: d.data.info,
        //       type: "success"
        //     });
        //     this.$router.push("/index/message");
        //   }
        // });
      }
    }
  },
  mounted() {
    this.type = this.$route.params.type;
    this.id = this.$route.params.id;

    var role = localStorage.getItem("role");
    if (role == "2") {
      this.dis = true;
      this.isShow = false;
    }
    console.log(role);
    if (this.type == "0") {
      this.btn = "发布";
    } else {
      this.btn = "修改";

      var id = this.id;
      fn.ajax(this, API.findMessage, { id }, "get", d => {
        this.ruleForm.con = d.data.data[0].con;
        this.ruleForm.time = d.data.data[0].time;
        this.ruleForm.tit = d.data.data[0].tit;
      });
      // this.$http({
      //   url: API.findMessage,
      //   params: {
      //     id: this.id
      //   }
      // }).then(d => {
      //   this.ruleForm.con = d.data.data[0].con;
      //   this.ruleForm.time = d.data.data[0].time;
      //   this.ruleForm.tit = d.data.data[0].tit;
      // });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
</style>
