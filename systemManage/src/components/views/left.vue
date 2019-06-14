<template>
  <div class="wrapper">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#4F4F4F"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" @click="adminManager()" v-if="admin">
            <i class="el-icon-user-solid"></i>
            <span slot="title">管理员管理</span>
          </el-menu-item>
          <el-menu-item index="2" @click="userManager()" v-if="user">
            <i class="el-icon-user"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="3" @click="message()">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">通知</span>
          </el-menu-item>
          <el-menu-item index="4" @click="deviceManage()">
            <i class="el-icon-setting"></i>
            <span slot="title">设备管理</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {},
  props: [],
  data() {
    return {
      admin: true,
      user: true
    };
  },
  watch: {},
  computed: {},
  methods: {
    adminManager() {
      this.$router.push("/index/adminManager");
    },
    userManager() {
      this.$router.push("/index/userManager");
    },
    message() {
      this.$router.push("/index/message");
    },
    deviceManage() {
      this.$router.push("/index/deviceManage");
    }
  },
  mounted() {
    var role = localStorage.getItem("role");
    switch (role) {
      case "1":
        this.admin = false;
        break;
      case "2":
        this.admin = false;
        this.user = false;
        break;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../../common/stylus/index.styl';

.el-row {
  width: 100%;
}

.el-menu {
  border: none;
}
</style>
