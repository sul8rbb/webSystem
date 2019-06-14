// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
import router from './router'
import App from './App'

//引入axios
import axios from 'axios';
Vue.prototype.$http = axios;

//引入过滤器
import Filter from "./filter"
for (var i in Filter) {
  Vue.filter(i, Filter[i]);
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
