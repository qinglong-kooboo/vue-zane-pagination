# vue-zane-swiper

> vue分页插件
 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run lib
```

## 参数配置
**pageSize**：type: Number 必选<br>
**middleSize**：type: Number 可选（默认4）<br>

## demo
![](https://github.com/qinglong-kooboo/vue-zane-pagination/blob/master/public/img/pagination.gif)

## 实例
首先在项目的入口文件（main.js）中引入
``` 
import Pagination from 'vue-zane-pagination'
Vue.use(Pagination) 
```

然后使用该组件
``` 
<Pagination :pageSize="pageSize"  />
```

``` 
      P.S. 插件的样式需要手动添加，可以在组件内引入：import 'vue-zane-pagination/lib/pagination.css' 或者在main.js中全局引入
```  

``` 


For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
