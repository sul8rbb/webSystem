<template>
  <div class="wrapper">
    <div class="titleStyle spanSize">{{this.$route.name}}</div>
    <div class="tables">
      <div>
        <el-button type="success" round @click="cuDevice()" v-if="isShow">新建</el-button>
      </div>

      <el-table :data="tableData" height="450" style="width: 95%">
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column prop="ip" label="ip" width="160"></el-table-column>
        <el-table-column prop="door" label="机房" width="150"></el-table-column>
        <el-table-column prop="num" label="编号" width="150"></el-table-column>
        <el-table-column prop="width" label="宽带" width="160"></el-table-column>
        <el-table-column prop="status" label="使用" width="170">
          <template slot-scope="scope">{{scope.row.status=='0'?'已出售':'空闲'}}</template>
        </el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button v-if="isShow" type="primary" round @click="findDevice(scope)">查看</el-button>
            <v-del @del="del($event)" v-if="isShow" :id="scope.row.id"></v-del>
            <el-button
              v-if="admin"
              type="primary"
              round
              @click="buy(scope)"
              :disabled="scope.row.status=='0'"
            >购买</el-button>
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
      admin: false,
      tableData: []
    };
  },
  watch: {},
  computed: {},
  methods: {
    del(id) {
      //ajax

      this.$http({
        url: API.delDevice,
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
    cuDevice() {
      this.$router.push("/index/cuDevice/0/id");
    },
    findDevice(scope) {
      this.$router.push("/index/cuDevice/1/" + scope.row.id);
    },
    buy(scope) {
      var status = scope.row.status;
      if (status == "0") {
        status = "1";
      } else {
        status = "0";
      }
      this.$http({
        url: API.updateDevice,
        params: {
          id: scope.row.id,
          status: status
        }
      }).then(d => {
        if (d.data.isok) {
          this.$message({
            message: "购买成功",
            type: "success"
          });
          this.init();
        }
      });
    },
    init() {
      var role = localStorage.getItem("role");
      if (role == "2") {
        this.isShow = false;
        this.admin = true;
      }
      this.$http({
        url: API.deviceList
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
