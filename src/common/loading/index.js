import loadingComponent from './loading.vue'
const loading = {
  install: (Vue) => {
    Vue.component('loading', loadingComponent)
  }
}
export default loading
