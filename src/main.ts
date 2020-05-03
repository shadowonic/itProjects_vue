import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {api} from '@/services/api'

Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  api,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
