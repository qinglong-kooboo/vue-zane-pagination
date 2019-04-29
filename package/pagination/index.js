import Pagination from './Pagination.vue'

const Pagination = {
  install: function(Vue) {
    Vue.component(Pagination.name, Pagination)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(Pagination) 
}
// 导出模块
export default Pagination
