import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutation'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    number: 11,
    loading: false,
    route: true,
    goodsList: [],
    allCheck: false,
    totalPrice: 0,
    totalNumber: 0
  },
  actions,
  mutations,
  getters
})
