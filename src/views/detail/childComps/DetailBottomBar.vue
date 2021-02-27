<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
      </div>
      <div class="bar-item bar-right">
        <div class="cart" @click="addToCart" >加入购物车</div>
      <div class="buy">购买</div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods:{
    addToCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    position: fixed;
    bottom: 40px;
    left: 0;
    right: 0;
    background-color:white;
    height: 49px;
    display: flex;
    /* position: absolute; */
  }
  .bar-left{
    width: 50%;
    display: flex;
  }
  .bar-left div {
    flex: 1;
    font-size: 13px;
    text-align: center;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }
  .bar-left .text {
    display: block;
    padding-top: 3px;
  }
  .bar-left .service{
    background-position: 0px -52px;
  }
  .bar-left .shop{
    background-position: 0px -98px;
  }
  .bar-left .select{
    background-position: 0px -26px;
  }

  .bar-right {
    width: 50%;
    display: flex;
  }
  .bar-right div{
    flex: 1;
    text-align: center;
    line-height: 49px;
    font-size: 14px;
    font-weight: 500;
  }
   .bar-right .cart {
     background-color:rgb(239,207,20);
     border: none;
     color: black;
   }
   .bar-right .buy {
     background-color: rgb(247,119,148);
     color: #fff;
   }
</style>>