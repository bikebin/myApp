// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui'
import store from  './store'

Vue.prototype.axios = axios

Vue.use(Mint);
import 'mint-ui/lib/style.css'
//屏幕适应
import './utils/fontSize'
//样式重置
import './assets/css/reset.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
