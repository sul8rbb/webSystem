<template>
  <div class="wrapper">
    <div class="titleStyle spanSize">{{this.$route.name}}</div>
    <div class="tables">
      <div>
        <el-button type="success" round @click="cuUser()">新建</el-button>
      </div>

      <el-table :data="tableData" style="width: 1000px" height="500">
        <el-table-column fixed type="index" label="序号" width="80px"></el-table-column>
        <el-table-column prop="name" label="账号" width="180px"></el-table-column>
        <el-table-column prop="tel" label="电话" width="180px"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="180px"></el-table-column>
        <el-table-column prop="sex" label="性别" width="80"></el-table-column>
        <el-table-column prop="idx" label="身份证号" width="180"></el-table-column>
        <el-table-column prop="des" label="备注" width="220"></el-table-column>
        <el-table-column prop="time" label="生日" width="120">
          <template slot-scope="scope">{{scope.row.time|timeFilter}}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="250">
          <template slot-scope="scope">
            <el-button type="primary" round @click="findUser(scope)">查看</el-button>
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
  props: ["id"],
  data() {
    return {
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    del(id) {
      //ajax
      this.$http({
        url: API.delUser,
        params: {
          id
        }
      }).then(d => {
        if (d.data.isok) {
          this.init();
        } else {
          //失败
        }
      });
    },
    cuUser() {
      this.$router.push("/index/cuUser/0/id");
    },
    findUser(scope) {
      this.$router.push("/index/cuUser/1/" + scope.row.id);
      // alert(scope.row.id);
    },
    init() {
      this.$http({
        url: API.userManager
      }).then(d => {
        this.tableData = d.data.data;
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';
</style>
