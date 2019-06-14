<template>
  <div class="wrapper">
    <div class="titleStyle spanSize">{{this.$route.name}}</div>
    <div class="tables">
      <div>
        <el-button type="success" v-if="isShow" round @click="cuMessage()">新建</el-button>
      </div>

      <el-table :data="tableData" height="450" style="width: 90%">
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column prop="tit" label="题目"></el-table-column>
        <el-table-column prop="con" label="注册时间" width="180"></el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button type="primary" round @click="findMessage(scope)">查看</el-button>
            <v-del @del="del($event)" v-if="isShow" :id="scope.row.id"></v-del>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import API from "../../common/js/API";
import vDel from "../../components/common/del";
export default {
  components: {
    vDel
  },
  props: [],
  data() {
    return {
      isShow: true,
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    del(id) {
      //ajax
      this.$http({
        url: API.delMessage,
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
    cuMessage() {
      this.$router.push("/index/cuMessage/0/id");
    },
    findMessage(scope) {
      this.$router.push("/index/cuMessage/1/" + scope.row.id);
    },
    init() {
      var role = localStorage.getItem("role");
      if (role == "2") {
        this.isShow = false;
      }
      this.$http({
        url: API.message
      }).then(d => {
        console.log(d);
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
