<template>
  <div class="header">
    <div class="headImg">
      <img src="../../../static/css/timg.jpeg" alt>
      <span class="neck">{{neck}}</span>
      <span class="logOut">
        <el-button size="mini" icon="el-icon-s-promotion" round @click="logOut()">注销</el-button>
      </span>
    </div>
    <div class="title">欢迎使用后台管理</div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: [],
  data() {
    return {
      neck: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    logOut() {
      this.$http({
        url: API.exit
      }).then(d => {
        if (d.data.isok) {
          this.$message({
            message: d.data.info,
            type: "success"
          });
        }
        this.$router.push("/login");
      });
    }
  },
  mounted() {
    this.neck = localStorage.getItem("neck");
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.header div {
  float: right;
}

.title {
  line-height: $headerH;
  color: white;
  font-size: 40px;
  width: 60%;
  text-align: center;
}

.headImg {
  width: 300px;
  margin-top: 40px;
}

.headImg img {
  width: 70px;
  height: 70px;
  border-radius: 50px;
}

.neck {
  line-height: 40px;
  font-size: 20px;
  margin-left: 20px;
  color: #EEDC82;
}

.logOut {
  margin-left: 15px;
}
</style>
