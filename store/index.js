import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 11
  },
  actions,
  mutations,
  getters: {
    getter (state) {
      return state.number
    }
  }
})
