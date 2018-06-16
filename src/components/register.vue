<template>
    <div id="register">
        <div class="header">
        	<router-link to='/user' tag='div' class='logo'>
                <img src="../assets/img/close.png" alt="" class="logo-img">
        	</router-link>
            <div class="search">
                注册
            </div>
            <div class="menu">               
                <router-link tag="p" to="/login">登录</router-link>
            </div>
        </div>
        <div class="content">
            <form @submit.prevent>
                <div class="username">
                    <label>会员名</label>
                    <input type="text" placeholder="请出入手机号码或者邮箱">
                </div>
                <div class="password">
                    <label>密码</label>
                    <input type="password" placeholder="请出入密码">
                </div>
                <div class="again">
                    <label>确认密码</label>
                    <input type="password" placeholder="请重复输入密码">
                </div>
                <div class="code">
                    <label>验证码</label>
                    <input type="text" placeholder="请输入下方的验证码">
                </div>
                <div class="change">
                    <img src="../assets/img/register1.png" alt="">
                    <span>看不清，换一张</span>
                </div>
                <div class="agree">
                    <label class="baseCheckbox">
                        <input type="checkbox">
                        <span></span>
                    </label>
                    <p>我已同意并阅读<span>《服务协议》</span></p>
                </div>
                <!-- <button type="button">注册</button> -->
                <mt-button type="default" @click.prevent="register">
                    注册
                </mt-button>
            </form>
        </div>
        <div class="footer">
            <h4><span>更多第三方登录</span></h4>
            <ul>
                <li><img src="../assets/img/register2.png" alt=""></li>
                <li><img src="../assets/img/register3.png" alt=""></li>
                <li><img src="../assets/img/register4.png" alt=""></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    register () {
      this.$router.push('/login')
    }
  }

}
</script>
<style scoped>
@import '../assets/css/register.css';
</style>
