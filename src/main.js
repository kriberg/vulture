// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import App from '@/App'
import router from '@/router'
import 'buefy/lib/buefy.css'
import '@/assets/css/vulture.scss'
import '@/filters'

Vue.config.productionTip = false
Vue.use(Buefy)

// Vue.http.interceptors.push({
//   response (response) {
//     if (response.status === 401) {
//       window.location.href = '/login'
//     }
//     return response
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})