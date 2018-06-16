<template>
    <div id="user">
        <div class="header">
            <div class="logo" onclick='window.history.go(-1)'>
                <img src="../assets/img/back.png" alt="" class="logo-img">
            </div>
            <div class="menu">
                编辑
            </div>
        </div>

        <!-- content -->
        <div class="content">
            <div class="user-column">
                <div class="user-msg">
                    <div class="insert">
                        <img src="../assets/img/user01.png" alt="">
                        <router-link tag="p" to="/register">用户名</router-link>
                    </div>
                </div>
                <div class="rigth">
                    <div class="insert">
                        <div class="user-vip">
                            <img src="../assets/img/user02.png" alt="">
                            <span>
                                黄金VIP
                            </span>
                        </div>
                    </div>
                </div> 
            </div>

            <div class="number-msg">
                <ul>
                    <li>
                        <p>88</p>
                        <p>收藏夹</p>
                    </li>
                    <li>
                        <p>388</p>
                        <p>关注店铺</p>
                    </li>
                    <li>
                        <p>16</p>
                        <p>关注品牌</p>
                    </li>
                </ul>
            </div>

            <div class="user-order">
                我的订单
                <span>查看更多订单 ></span>
            </div>

            <div class="order-nav">
                <ul>
                    <li>
                        <img src="../assets/img/user03.png" alt="">
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src="../assets/img/user04.png" alt="">
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src="../assets/img/user05.png" alt="">
                        <p>待收货</p>
                    </li>
                    <li>
                        <img src="../assets/img/user06.png" alt="">
                        <p>待评价</p>
                    </li>
                    <li>
                        <img src="../assets/img/user07.png" alt="">
                        <p>退款/售后</p>
                    </li>
                </ul>
            </div>

            <div class="service-list">
                <ul>
                    <li>
                        <img src="../assets/img/user08.png" alt="">
                        <p>待收款</p>
                    </li>
                    <li>
                        <img src="../assets/img/user09.png" alt="">
                        <p>会员中心</p>
                    </li>
                    <li>
                        <img src="../assets/img/user10.png" alt="">
                        <p>购买记录</p>
                    </li>
                    <li>
                        <img src="../assets/img/user11.png" alt="">
                        <p>地址管理</p>
                    </li>
                    <li>
                        <img src="../assets/img/user12.png" alt="">
                        <p>我的活动</p>
                    </li>
                    <li>
                        <img src="../assets/img/user13.png" alt="">
                        <p>我的社区</p>
                    </li>
                    <li>
                        <img src="../assets/img/user08.png" alt="">
                        <p>排行榜</p>
                    </li>
                    <li>
                        <img src="../assets/img/user08.png" alt="">
                        <p>我的分享</p>
                    </li>
                </ul>
            </div>

        </div>  


    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
@import '../assets/css/user.css';
</style>
