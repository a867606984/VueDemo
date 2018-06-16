<template>
  <div id="nav">
    <div class="nav">  
      <mt-button class="but" @click.native.prevent="active = 'tab-container1'" :class="{active: active === 'tab-container1' }">新闻</mt-button>  
      <mt-button  class="but" @click.native.prevent="active = 'tab-container2'" :class="{active: active === 'tab-container2' }">娱乐</mt-button>  
      <mt-button  class="but"  @click.native.prevent="active = 'tab-container3'" :class="{active: active === 'tab-container3' }">电影</mt-button>  
    </div>
    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
      <mt-tab-container-item id="tab-container1">  
          <!-- cell组件 -->  
        <!-- <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>   -->
        <ul>
          <li v-for="val in arrList">
            <h4>{{val.title}}</h4>
            <p>{{val.msg}}</p>
          </li>
        </ul>
      </mt-tab-container-item>  
      <mt-tab-container-item id="tab-container2">  
          <!-- cell组件 -->  
        <!-- <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>   -->
        <ul>
          <li v-for="val in arrList">
            <h4>{{val.title}}</h4>
            <p>{{val.msg}}</p>
          </li>
        </ul>
      </mt-tab-container-item>  
      <mt-tab-container-item id="tab-container3">  
          <!-- cell组件 -->  
        <!-- <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>   -->
        <ul>
          <li v-for="val in arrList">
            <h4>{{val.title}}</h4>
            <p>{{val.msg}}</p>
          </li>
        </ul>
      </mt-tab-container-item>  
    </mt-tab-container>   
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      msg: '我是逛一逛',
      nav: ['动态', '新闻', '娱乐', '电影'],
      curIndex: 0,
      active: 'tab-container1',
      arrList: []
    }
  },
  methods: {
    show (index) {
      this.curIndex = index
    },
    fetchData () {
      axios.get('./src/data/going.json').then(res => {
        this.arrList = res.data
      })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>
<style lang="less" scoped>
  .nav{
    height: 1rem;
    width: 100%;
    background: #31BFFF;
    position: fixed;
    top:0;
    left:0;
    z-index: 9;
  }
  .but{
    height:1rem;
    width:33.333%;
    box-sizing:border-box;
    float:left;
    background: #31BFFF;
    font-size:.3rem;
    color:#fff;
  }
  .active{
    border-bottom:.05rem solid gray;
  }
  .page-tabbar-tab-container{
    padding-top:1.5rem;
    padding-bottom:1.5rem;
  }
  .page-tabbar-tab-container ul,li{
    overflow: hidden;
    padding:0 .1rem;
  }

  .page-tabbar-tab-container li{
    margin-bottom:.2rem;
  }

  .page-tabbar-tab-container h4{
    font-size: .24rem;
    line-height: .5rem;
    text-align: left;
  }

  .page-tabbar-tab-container ul>li>p{
    font-size: .20rem;
    text-align: left;
    line-height: .4rem;
  }
  // .mint-tab-container{
  //   height: 1rem;
  //   background: #31BFFF;
  // }

  // @color:#fff;
  // @bg:#31BFFF;
  // @size:.24rem;
  // .nav{background: @color;}
  // .header{
  //   &{
  //     position:fixed;
  //     width:100%;
  //     height: 1rem;
  //     background: @bg;
  //   }

  //   ul{
  //     overflow: hidden;
  //   }

  //   li{
  //     width:25%;
  //     float: left;
  //     font-size: .3rem;
  //     line-height: .9rem;
  //     text-align: center;
  //     color:@color;
  //   }

  //   li.active{
  //     border-bottom: .1rem solid #0D81EE;
  //   }

  // }

  // .content{
  //   padding-top:1rem;
  //   font-size: @size;
  //   color:#000;
  // }

</style>
