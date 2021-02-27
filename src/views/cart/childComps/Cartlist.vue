<template>
  <div class="cart-list">
    <cart-list-item v-for="(item,index) in cartList"  :item-info='item' :key="index"/>
    <div class="blank"></div>
  </div>
</template>

<script>

import CartListItem from "./CartListItem"
import {mapGetters} from "vuex";

export default {
  components: { CartListItem },
  name:'CartList',
  computed:{
    ...mapGetters(['cartList'])
  }
}
</script>

<style>
  .blank {
    height: 100px;
  }
</style>