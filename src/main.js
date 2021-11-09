import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
