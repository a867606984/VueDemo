<template>
  <div>
    <!-- header -->
    <div class="header">
      <div class="logo" onclick='window.history.go(-1)'>
        <img src="../assets/img/back.png" alt="" class="logo-img">
      </div>
      <div class="search">
        购物车
      </div>
      <div class="menu">
        编辑
      </div>
    </div>

    <!-- content -->
    <div class="goods">
      <div class="top-all-sel" >
        <label>
          <input type="checkbox" v-model="allCheck" @click="allChecked($event)">
          <span></span>
          全选
        </label>
        <span class="free">
          以免运费
        </span>
      </div>

      <div class="goods-list">
        <ul>
          <li v-for="(val,index) in goodsList" :key="val.id">         
            <label class="check-alone">
              <input type="checkbox" @click="isCheck(index)" v-model="val.sel">
              <span></span>
            </label>
            <router-link to="/details">
              <img :src="val.img">
            </router-link>
            <div class="right">
              <router-link to="/details">
                <p class="goods-msg">{{val.msg}}</p>
              </router-link>
              <p class="goods-params">
                <span class="size">尺码： {{val.size}}码</span>
                <span class="color">颜色： {{val.color}}</span>
              </p>
              <span class="price">{{val.price | toFixed}}</span>
              <div class="count">
                <span class="count-reduce" @click="reduce(index)">-</span>
                <input type="text" :value="val.number">
                <span class="count-add" @click="add(index)">＋</span>
              </div>
              <span class="delete" @click="del(index)">×</span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="bot-all-sel">
        <label>
          <input type="checkbox" v-model="allCheck" @click="allChecked($event)">
          <span></span>
          全选
        </label>
      </div>
      <p class="total">合计<span class="total-price">{{totalPrice | toFixed}}</span></p>
      <!-- <p class="pay">去结算(2)</p> -->
      <mt-button type="danger" class="pay" @click.once='pay'>去结算({{totalNumber}})</mt-button>
    </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      goodsList: [],
      allCheck: false,
      totalPrice: 0,
      totalNumber: 0
    };
  },
  methods: {
    // 单选
    isCheck(index) {
      this.$store.dispatch("isCheck", index);
    },
    // 全选
    allChecked(e) {
      let ev = e.target.checked;
      this.$store.dispatch("allChecked", ev);
    },
    reduce(index) {
      this.$store.dispatch("reduce", index);
    },
    add(index) {
      this.$store.dispatch("add", index);
    },
    del(index) {
      this.$store.dispatch("del", index);
    },
    pay() {
      alert(3);
    }
  },
  mounted() {
    axios.get("./src/data/shopCart.json").then(res => {
      this.goodsList = res.data;
    });
  },
  updated() {
    // let _this = this;
    // this.$nextTick(function() {
    //   _this.allCheck = _this.$store.getters.allCheck;
    //   _this.totalPrice = _this.$store.getters.totalPrice;
    //   _this.totalNumber = _this.$store.getters.totalNumber;
    // });
  }
};
</script>
<style scoped>
@import "../assets/css/shopCart.css";
</style>
