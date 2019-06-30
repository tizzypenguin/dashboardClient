import Vue from 'vue'
import App from './App'
import FishUI from 'fish-ui'
import router from './router'
import axios from 'axios'
import '@/assets/font-awesome.min.css'

Vue.prototype.$http = axios
Vue.use(FishUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
