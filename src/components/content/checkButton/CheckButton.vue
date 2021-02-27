<template>
  <div class="check-button" :class="{checked:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  props:{
    isChecked:{
      type:Boolean,
      default:true
    }
  }
}
</script>

<style>
  .check-button{
    box-sizing: border-box;
    border-radius: 50%;
    border: 2px solid grey;
    background-color: #fff;
    width: 20px;
    height: 20px;
  }
  .checked {
    border-color: rgb(255,129,152);
    background-color: rgb(255,129,152);
  }
</style>