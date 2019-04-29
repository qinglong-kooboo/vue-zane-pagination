import Vue from 'vue'
import App from './App.vue'
import Pagination from '../package/index'

Vue.use(Pagination)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
