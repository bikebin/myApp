// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui'
import store from  './store'
import * as filters from './filters'

Vue.prototype.axios = axios

Vue.use(Mint);
import 'mint-ui/lib/style.css'
//屏幕适应
import './utils/fontSize'
//样式重置
import './assets/css/reset.css'
//动画
import './assets/css/animate.css'





// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
