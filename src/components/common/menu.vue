<template>
    <ul class="nav-bar-wrap">
        <router-link to="/home" tag="li">首页</router-link>
        <router-link to="/classify" tag="li">全部分类</router-link>
        <router-link to="/cart" tag="li">购物车</router-link>
        <router-link to="/my" tag="li">我的</router-link>
    </ul>
</template>
<script>
// import Vue from 'vue';
export default {
    
}
</script>

<style lang="scss">
.nav-bar-wrap{
   display: flex;
   justify-content: space-between;
   align-items: center;
   li{
       width: 25%;
       text-align: center;
   }
}
</style>
