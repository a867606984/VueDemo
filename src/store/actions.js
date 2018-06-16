export default {
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
}