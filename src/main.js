import Vue from 'vue'
import App from '@/App.vue'

import store from '@/store' 
import router from '@/router'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

// Vue.use(VueRouter)

const vue = new Vue({
  router,
  store,
  render: h => h(App)
})

vue.$mount('#app')
