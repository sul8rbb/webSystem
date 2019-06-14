<template>
  <div class="wrapper">
    <div class="titleStyle spanSize">{{this.$route.name}}</div>
    <div class="tables">
      <div>
        <el-button type="success" round @click="cuAdmin()">新建</el-button>
      </div>

      <el-table :data="tableData" height="450" style="width: 90%">
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column prop="name" label="账号" width="280"></el-table-column>
        <el-table-column prop="prop" label="属性" width="180"></el-table-column>
        <el-table-column prop="time" label="注册时间" width="230">
          <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" round @click="findAdmin(scope)">查看</el-button>
            <v-del @del="del($event)" :id="scope.row.id"></v-del>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import fn from "../../common/js/fn";
import vDel from "../../components/common/del";
export default {
  components: {
    vDel
  },
  props: [],
  data() {
    return {
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    del(id) {
      fn.ajax(this, API.delManager, { id }, "get", d => {
        this.init();
      });
    },
    cuAdmin() {
      this.$router.push("/index/cuAdmin/0/id");
    },
    findAdmin(scope) {
      var id = scope.row.id;
      this.$router.push("/index/cuAdmin/1/" + id);
    },
    init() {
      //管理员列表
      fn.ajax(this, API.findManager, {}, "get", d => {
        this.tableData = d.data.data;
      });
    }
  },

  mounted() {
    this.init();
  },
  beforeRouterEnter(to, from, next) {
    var role = localStorage.getItem("role");
    if (role == 0) {
      next();
    } else {
      window.location.href("/");
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
</style>
