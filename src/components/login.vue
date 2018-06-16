<template>
    <div id="login">
        <div class="header">
            <router-link to='/user' tag='div' class='logo'>
                <img src="../assets/img/close.png" alt="" class="logo-img">
        	</router-link>
            <div class="search">
                登录
            </div>
            <div class="menu">               
                <router-link tag="p" to="/register">注册</router-link>
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
                <div class="forget">忘记密码 ?</div>
                <!-- <button type="button">登录</button> -->
                <mt-button type="default" @click.prevent="login">
                    登录
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
  methods: {
    login () {
      this.$router.push('/home')
    }
  }
}
</script>
<style scoped>
@import '../assets/css/login.css';
</style>
