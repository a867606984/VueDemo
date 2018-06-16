import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutation'
import getters from './getters'

Vue.use(Vuex)

let state = {
    number: 11,
    loading: false,
    route: true,
    goodsList: [],
    allCheck: false,
    totalPrice: 0,
    totalNumber: 0
  }
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
