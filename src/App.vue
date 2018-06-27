<template>
  <div id="app">
    <loading :show="$store.state.loading.isShow"></loading>
   <router-view></router-view>
  </div>
</template>

<script>
import Loading  from "./components/common/loading"
export default {
  name: 'App',
  components: {
    Loading
  },
  data(){
    return {
      
    }
  },
  computed: {
  },
}
</script>

<style lang="scss">
@import "../static/css/reset.scss";
// @import "./common/css/loading.scss";
</style>
