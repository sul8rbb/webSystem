import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


//登录
import login from "../components/pages/login"
//首页
import index from "../components/pages/index"
//欢迎页
import welcome from "../components/views/welcome"
//管理员管理
import adminManager from "../components/pages/adminManager"
//用户管理
import userManager from "../components/pages/userManager"
//通知
import message from "../components/pages/message"
//设备管理
import deviceManage from "../components/pages/deviceManage"
//新增、修改管理员
import cuAdmin from "../components/pages/cuAdmin"
//新增、修改用户
import cuUser from "../components/pages/cuUser"
//新增、修改通知
import cuMessage from "../components/pages/cuMessage"
//新增、修改设备
import cuDevice from "../components/pages/cuDevice"


export default new Router({
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/index',
      component: index,
      children: [{
        path: 'adminManager',
        component: adminManager,
        name: '管理员列表',

      }, {
        path: 'cuAdmin/:type/:id',
        component: cuAdmin,
        name: '添加/修改管理员'
      }, {
        path: 'userManager',
        component: userManager,
        name: '用户列表'
      }, {
        path: 'cuUser/:type/:id',
        component: cuUser,
        name: '添加/修改用户'

      }, {
        path: 'message',
        component: message,
        name: '通知列表',
      }, {
        path: 'cuMessage/:type/:id',
        component: cuMessage,
        name: '添加/修改通知'

      }, {
        path: 'deviceManage',
        component: deviceManage,
        name: '设备列表'
      }, {
        path: 'cuDevice/:type/:id',
        component: cuDevice,
        name: '添加/修改设备'
      }, {
        path: 'welcome',
        component: welcome
      }, {
        path: '',
        redirect: 'welcome'
      }]
    },
    {
      path: '*',
      redirect: '/login'
    }


  ]
})
