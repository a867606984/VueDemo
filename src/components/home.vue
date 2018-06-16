<template>
  <div id="home">
    <div class="header">
      <div class="logo">
        <img src="../assets/img/logo.png" alt="" class="logo-img" ref="aas">
      </div>
      <div class="search">
        <span class="search-icon"></span>
        <span class="search-import">请输入关键字</span>
        <span class="scan-code"></span>
      </div>
      <div class="menu toggle-button">
        <img src="../assets/img/menu.png" class="menu-icon">
      </div>
    </div>

    <!-- content -->
    <div class="content">
      <!-- banner -->
      <slider></slider>
      <!-- <loading v-show="loading" style="position:fixed;top:calc(50% - 2rem);left:calc(50% - 1.5rem);z-index:9;"></loading> -->
      <!-- goods -->
      <div class="goods">
        <h4><span>热卖爆款</span></h4>
        <ul class="list">
          <li v-for="val in arrList" :key='val.id'>
            <!-- <router-link :to="{name: 'article', params: {id: val.id}}"> -->
            <router-link to="/details">
              <img :src="val.img" alt="">
              <div class="msg">
                <p>{{val.msg}}</p>
                <span class="price">{{val.price | toFixed}}</span>
                <span class="into">点击进入</span>
              </div>
            </router-link>
          </li>
        </ul>
        <p class="over-loading" v-show="overLoading"><span>商品已经加载完毕</span></p>
      </div>
  <!-- goods-end -->   
    </div>   
    
  </div>
</template>
<script>
import slider from "../common/slider";
import axios from "axios";
export default {
  components: {
    slider
  },
  data() {
    return {
      arrList: [],
      overLoading: true
    };
  },
  methods: {
    fatchData() {
      var _this = this;
      axios.get("./src/data/home.json").then(function(res) {
        _this.arrList = res.data;
      });
    }
  },
  mounted() {
    this.fatchData();
    // console.log(this.$route.params.id)
  },
  computed: {
    loading() {
      return this.$store.getters.getter;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.path);
    console.log(from.path);
    next();
  },
  beforeRouteLeave(to, from, next) {
    // console.log(to.path);
    // console.log(from.path);
    next();
  }
};
</script>
<style scoped>
@import "../assets/css/home.css";
</style>
