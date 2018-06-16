// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import Loading from './common/loading'
import Mint from 'mint-ui'
import filters from './filters/filters'
import axios from 'axios'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.config.productionTip = false
Vue.use(vuex)
Vue.use(Loading)
Vue.use(Mint)
/* eslint-disable no-new */
axios.interceptors.request.use(function (config) {  // 发送请求
  store.dispatch('showloading')
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {  // 请求回来
  setTimeout(() => {
    store.dispatch('hidden')
  }, 1000)
  return response
}, function (error) {
  return Promise.reject(error)
})

// router.beforeEach((to,from,next)=>{
//   // console.log(to.path);
//   // console.log(from.path);
//   to.params.id = 4;
//   next();
// })

new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
})
