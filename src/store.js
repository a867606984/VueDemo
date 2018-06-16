import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    number: 11,
    loading: false,
    route: true,
    goodsList: [],
    allCheck: false,
    totalPrice: 0,
    totalNumber: 0
  },
  actions: {
    showloading(context) {
      context.commit('showloading')
    },
    hidden(context) {
      context.commit('hidden')
    },
    // 路由模块
    showRoute(context) {
      context.commit('showRoute')
    },
    hideRoute(context) {
      context.commit('hideRoute')
    },
    // 购物车模块
    add(context, index) {
      // if (this.state.goodsList[index].number >= 99) {
      //   return false
      // } else {
      //   context.commit('add', index)
      // }
    },
    reduce(context, index) {
      // if (this.state.goodsList[index].number <= 1) {
      //   return false
      // } else {
      //   context.commit('reduce', index)
      // }
    },
    isCheck(context, index) {
      context.commit('isCheck', index)
    },
    allChecked(context, e) {
      context.commit('allChecked', e)
    },
    del(context, index) {
      context.commit('del', index)
    }
  },
  mutations: {
    showloading(state) {
      state.loading = true
    },
    hidden(state) {
      state.loading = false
    },
    // 路由模块
    showRoute(state) {
      state.route = true
    },
    hideRoute(state) {
      state.route = false
    },
    // 购物车模块
    add(state, index) {
      // state.goodsList[index].number++
    },
    reduce(state, index) {
      // state.goodsList[index].number--
    },
    isCheck(state, index) {
      // state.goodsList[index].sel = !state.goodsList[index].sel
      // // 全部被打勾则“全选” 打勾
      // let newArr = []
      // for (let i = 0; i < state.goodsList.length; i++) {
      //   if (state.goodsList[i].sel) {
      //     newArr.push(state.goodsList[i].sel)
      //     if (state.goodsList.length === newArr.length) {
      //       state.allCheck = true
      //       // console.log(state.allCheck)
      //     } else {
      //       state.allCheck = false
      //     }
      //   }
      // }
      // // 只剩下一个的bug
      // if (state.goodsList.length === 1) {
      //   if (state.goodsList[0].sel) {
      //     state.allCheck = true
      //   } else {
      //     state.allCheck = false
      //   }
      // }
    },
    allChecked(state, e) {
      // state.allCheck = e
      // if (state.allCheck) {
      //   for (let i = 0; i < state.goodsList.length; i++) {
      //     state.goodsList[i].sel = true
      //   }
      // } else {
      //   for (let i = 0; i < state.goodsList.length; i++) {
      //     state.goodsList[i].sel = false
      //   }
      // }
    },
    del(state, index) {
      // state.goodsList.splice(index, 1)
      // if (state.goodsList.length === 0) {
      //   state.allCheck = false
      // }
      // let newArr = []
      // for (let i = 0; i < state.goodsList.length; i++) {
      //   if (state.goodsList[i].sel) {
      //     newArr.push(state.goodsList[i].sel)
      //     if (state.goodsList.length === newArr.length) {
      //       state.allCheck = true
      //       // console.log(state.allCheck)
      //     } else {
      //       state.allCheck = false
      //     }
      //   }
      // }
    }
  },
  getters: {
    getter(state) {
      return state.loading
    },
    route(state) {
      return state.route
    },
    goodsList(state) {
      // return state.goodsList
    },
    allCheck(state) {
      // return state.allCheck
    },
    totalPrice(state) {
      // state.totalPrice = 0
      // for (let i = 0; i < state.goodsList.length; i++) {
      //   if (state.goodsList[i].sel) {
      //     state.totalPrice += parseInt(state.goodsList[i].price) * parseInt(state.goodsList[i].number)
      //   }
      // }
      // return parseInt(state.totalPrice)
    },
    totalNumber(state) {
      // state.totalNumber = 0
      // for (let i = 0; i < state.goodsList.length; i++) {
      //   if (state.goodsList[i].sel) {
      //     state.totalNumber += state.goodsList[i].number
      //   }
      // }
      // return state.totalNumber
    }
  }
})
