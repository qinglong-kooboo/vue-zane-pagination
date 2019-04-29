import Pagination from './pagination/Pagination.vue'
const pagination = {
  install: function(Vue) {
    Vue.component(Pagination.name, Pagination)
  }
}
// global 情况下 自动安装
if (typeof window !== 'undefined' && window.Vue) { 
    window.Vue.use(pagination) 
}
// 导出模块
export default pagination
