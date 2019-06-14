<template>
  <div class="wrapper">
    <div class="titleStyle spanSize">{{this.$route.name}}</div>
    <div class="mtables">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="ip">
          <el-input v-model="form.ip"></el-input>
        </el-form-item>
        <el-form-item label="机房">
          <el-input v-model="form.door"></el-input>
        </el-form-item>
        <el-form-item label="编号" v-if="isShow">
          <el-input v-model="form.num"></el-input>
        </el-form-item>
        <el-form-item label="宽带">
          <el-input v-model="form.width"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio v-model="form.status" label="1">空闲</el-radio>
          <el-radio v-model="form.status" label="0">已出售</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round @click="addDevice()">{{btn}}</el-button>
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
      type: "",
      id: "",
      isShow: true,
      form: {
        ip: "",
        door: "",
        num: "",
        width: "",
        status: "1"
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    addDevice() {
      if (this.type == "0") {
        if (!checkEmpty.ckEmpty(this.form)) {
          this.$message({
            message: "以上内容均为必填项，请检查是否全部填写！",
            type: "warning"
          });
          return;
        }
        //新增设备
        fn.ajax(this, API.addDevice, this.form, "get", d => {
          if (d.data.isok) {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.$router.push("/index/deviceManage");
          }
        });
        // this.$http({
        //   url: API.addDevice,
        //   params: this.form
        // }).then(d => {
        //   if (d.data.isok) {
        //     this.$message({
        //       message: d.data.info,
        //       type: "success"
        //     });
        //     this.$router.push("/index/deviceManage");
        //   }
        // });
      } else {
        delete this.form.num;
        this.form.id = this.id;
        if (!checkEmpty.ckEmpty(this.form)) {
          this.$message({
            message: "以上内容均为必填项，请检查是否全部填写！",
            type: "warning"
          });
          return;
        }
        //修改设备
        fn.ajax(this, API.updateDevice, this.form, "get", d => {
          if (d.data.isok) {
            this.$message({
              message: d.data.info,
              type: "success"
            });
            this.$router.push("/index/deviceManage");
          }
        });
        // this.$http({
        //   url: API.updateDevice,
        //   params: this.form
        // }).then(d => {
        //   if (d.data.isok) {
        //     this.$message({
        //       message: d.data.info,
        //       type: "success"
        //     });
        //     this.$router.push("/index/deviceManage");
        //   }
        // });
      }
    }
  },
  mounted() {
    this.type = this.$route.params.type;
    this.id = this.$route.params.id;
    var role = localStorage.getItem("role");
    if (this.type == "0") {
      this.btn = "注册";
    } else {
      this.dis = true;
      this.btn = "修改";
      this.isShow = false;
      var id = this.id;
      fn.ajax(this, API.findDevice, { id }, "get", d => {
        this.form.ip = d.data.data[0].ip;
        this.form.door = d.data.data[0].door;
        this.form.width = d.data.data[0].width;
        this.form.status = d.data.data[0].status;
      });
      // this.$http({
      //   url: API.findDevice,
      //   params: {
      //     id: this.id
      //   }
      // }).then(d => {
      //   this.form.ip = d.data.data[0].ip;
      //   this.form.door = d.data.data[0].door;
      //   this.form.width = d.data.data[0].width;
      //   this.form.status = d.data.data[0].status;
      // });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
</style>
