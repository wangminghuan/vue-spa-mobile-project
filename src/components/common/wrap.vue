<template>
    <div class="outer-wrapper">
        <div class="outer-content-wrap">
            <keep-alive include="cart">
               <router-view></router-view>
            </keep-alive>
        </div>
        <v-menu class="outer-menu"></v-menu>
    </div>
</template>
<script>
import vMenu from "components/common/menu";
export default {
     components:{
         vMenu
     }
}
</script>
<style lang="scss">
$navHeight:40px;
.outer-wrapper{
    .outer-content-wrap{
     margin-bottom: $navHeight
    }
    .outer-menu{
        position: fixed;
        bottom: 0;
        left:0;
        right: 0;
        height: $navHeight;
        background-color: #eee
    }
}
</style>


