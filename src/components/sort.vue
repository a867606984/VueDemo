<template>
    <div id="sort">
        <div class="header">
          <div class="logo" onclick='window.history.go(-1)'>
            <img src="../assets/img/back.png" alt="" class="logo-img">
          </div>
          <div class="search">
            <span class="search-icon"></span>
            <span class="search-import">请输入关键字</span>
            <span class="scan-code"></span>
          </div>
          <div class="menu toggle-button">
            <img src="../assets/img/menu2.png" class="menu-icon">
          </div>
        </div>

        <!-- content -->
        <div class="content">
            <div class="sort-nav">
                <ul>
                    <li v-for="(val,index) in nav" :class="{active:navIndex===index}" @click="tab(index,navIndex)">{{val.nav}}</li>
                </ul>
            </div>
            <div class="goods">
              <div class="container">
                <h4 class="title">商务男士西装</h4>
                <ul class="goods-list">
                    <li v-for="val in goodsList" class="hook">
                       <router-link to="/details"> 
                        <img :src="val.img">
                        <p>{{val.text}}</p>
                       </router-link> 
                    </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      nav: [],
      goodsList: [],
      navIndex: 0
    }
  },
  methods: {
    fetchData () {
      axios.get('./src/data/sort.json').then(res => {
        this.goodsList = res.data[0].goods
      })
    },
    fetachNav () {
      axios.get('./src/data/sort.json').then(res => {
        this.nav = res.data
      })
    },
    tab (index) {
      this.navIndex = index
      axios.get('./src/data/sort.json').then(res => {
        this.goodsList = res.data[index].goods
      })
    }
  },
  created () {
    this.$nextTick(() => {
      this.fetchData()
      this.fetachNav()
    })
  }
}
</script>
<style scoped>
@import '../assets/css/sort.css';
</style>
