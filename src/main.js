// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui'
import store from  './store'
import * as filters from './filters'
import iView from 'iview';
import VueI18n  from 'vue-i18n'
import ien from 'iview/dist/locale/en-US'
import izh from 'iview/dist/locale/zh-CN'
import en from './locale/en-US'
import zh from './locale/zh-CN'
// import 'iview/dist/styles/iview.css';
Vue.use(iView);
Vue.use(VueI18n)
// Vue.locale = () => {};
const messages = {
  ien: Object.assign(en,ien),
  izh: Object.assign(zh,izh)
}
const i18n = new VueI18n({
  locale: 'izh',
  messages
})
Vue.use(iView,{i18n:(key,value)=>i18n.t(key,value)})
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
  i18n,
  router,
  store,
  components: { App },
  template: '<App/>'
})
