<template>
  <div class="del">
    <el-button type="danger" round @click="delAdmin()">删除</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
export default {
  components: {},
  props: ["id"],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    delAdmin() {
      var that = this;
      this.$confirm("您确定删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        that.$emit("del", that.id);
      });
    }
  },
  mounted() {}
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.del {
  display: inline-block;
}

.el-button--danger {
  margin-left: -30px;
}
</style>
