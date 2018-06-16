export default {
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
}