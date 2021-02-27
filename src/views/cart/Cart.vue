<template>
  <div class="cart">
    <nav-bar class="nab-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="wrapper ignore">
    <cart-list/>
    </scroll>
    <cart-bottom-bar class="bottom ignore"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/Cartlist.vue';
import Scroll from 'components/common/scroll/Scroll.vue';

import {mapGetters} from "vuex";
import CartBottomBar from './childComps/CartBottomBar.vue';

  export default {
    name: "Cart",
    components: { 
      NavBar,
      CartList,
        Scroll,
        CartBottomBar ,
      },
    computed: {
      ...mapGetters(['cartLength'])
    }
    
  }
  
</script>

<style scoped>
  .cart {
    height: 100vh;
    position: relative;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-size: 18px;
    position: relative;
    top: 0;
    left: 0;
    /* font-weight: 600; */
  }
  .wrapper {
    /* height:calc(100% - 44px - 49px - 40px); */
    /* height: 300px; */
    position: absolute;
    top: 44px;
    bottom: 99px;
    left: 0;
    right: 0;
    background-color:#fff;
    overflow: hidden;
  }
  .ignore {
    position: fixed;
    left: 0;
    bottom: 49px;
    right: 0;
  }
</style>
