export default {
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