<template>
    <div id="details">
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
        <div class="content">
            <div class="banner">
                <img src="../assets/img/details1.png" alt="">
            </div>
            <div class="msg">
                <p>新鲜有营养，一叶子面膜，品牌效应。上衣秋装衬衫冬装男款</p>
                <span class="price">￥200.00</span>
                <span class="num">× 1</span>
            </div>
            <div class="details">
                <h4>商品详情</h4>
                <div class="details-img">
                    <img src="../assets/img/details2.png" alt="">
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="like">
                <img src="../assets/img/details3.png" alt="">
                <p>收藏</p>
            </div>
            <div class="cart">
                <img src="../assets/img/details4.png" alt="">
                <p>购物车</p>
            </div>
            <mt-button class="into-cart">
                加入购物车
            </mt-button>  
            <mt-button class="buy">
                点击购买
            </mt-button> 
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import "../assets/css/details";
</style>
