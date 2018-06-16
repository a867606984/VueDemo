<template>
    <div>
        <ul class="bot">
            <router-link tag='li' to='/home'>
                <i></i>
                <p>首页</p>
            </router-link>
            <router-link tag='li' to='/sort'>
                <i></i>
                <p>分类</p>
            </router-link>
            <router-link tag='li' to='/going'>
                <i></i>           
                <p>逛一逛</p>
            </router-link>
            <router-link tag='li' to='/shopCart'>
                <i></i> 
                <p>购物车</p>
            </router-link>
            <router-link tag='li' to='/user'>
               <i></i> 
               <p>我的</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  watch: {
    $route (to) {
      if (to.path === '/login' || to.path === '/register' || to.path === '/details') {
        this.route = false
      } else {
        this.route = true
      }
    }
  }
}
</script>
<style scoped>
    .bot{position: fixed;bottom: 0;left:0;list-style: none;width:100%;background: #0d81ee;height: 1rem;z-index: 99;}
    .bot li{float:left;width: 20%;line-height:0.35rem;text-align: center;padding-top:0.1rem;color: #fff;font-size: 0.16rem;}
    .router-link-active{
        background:#fff;
        
    }
    .router-link-active p {
        color:#0d81ee;
        
    }
    .bot li i{
        width:0.6rem;
        height: 0.6rem;
        display: block;
        margin: 0 auto;  
    }
    .bot li:nth-child(1) i{
        background: url(../assets/img/index.png) no-repeat center;   
        background-size: cover ;
    }
    .bot li:nth-child(2) i{
        background: url(../assets/img/sort.png) no-repeat center;
        background-size: cover ;
    }
    .bot li:nth-child(3) i{
        background: url(../assets/img/going.png) no-repeat center;
        background-size: cover ;
    }
    .bot li:nth-child(4) i{
        background: url(../assets/img/shopCart.png) no-repeat center;
        background-size: cover ;
    }
    .bot li:nth-child(5) i{
        background: url(../assets/img/user.png) no-repeat center;
        background-size: cover ;
    }

    .bot li:nth-child(1).router-link-active i{
        background: url(../assets/img/index1.png) no-repeat center;   
        background-size: cover ;
    }
    .bot li:nth-child(2).router-link-active i{
        background: url(../assets/img/sort1.png) no-repeat center;
        background-size: cover ;
    }
    .bot li:nth-child(3).router-link-active i{
        background: url(../assets/img/going1.png) no-repeat center;
        background-size: cover ;
    }
    .bot li:nth-child(4).router-link-active i{
        background: url(../assets/img/shopCart1.png) no-repeat center;
        background-size: cover ;
    }
    .bot li:nth-child(5).router-link-active i{
        background: url(../assets/img/user1.png) no-repeat center;
        background-size: cover ;
    }
</style>
