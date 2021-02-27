<template>
  <div id="shop-info">
    <div class="item-selector">
      <CheckButton 
       :is-checked = itemInfo.checked
       @click.native ='checkedChange(itemInfo)'></CheckButton>
    </div>
    <div class="item-img" >
      <img :src="itemInfo.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="product-title">{{itemInfo.title}}</div>
      <div class="product-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="product-price">￥{{itemInfo.price}}</div>
        <div class="product-count">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
  name:'CartListItem',
  props:{
    itemInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkedChange(itemInfo){
      // this.itemInfo.checked = !this.itemInfo.checked
      this.$store.commit('checked_change',itemInfo)
      
    }
  },
  components:{
    CheckButton,
  }
}
</script>

<style scoped>
  #shop-info {
    height: 140px;
    border-bottom: 5px solid rgb(246,246,246);
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    /* padding: 10px 20px; */
  }
  .item-selector {
    width: 20px;
    display: flex;
  }
  .item-img {
    width: 25vw;
    height: 120px;
  }
  .item-img img{
    /* float: left; */
    height: 100%;
    max-width: 100%;
    /* width: 100%; */
    border-radius: 10px;
  }
  .item-info {
    /* padding-left: 10px; */
    width: 60vw;
    font-size: 14px;
  }
  .product-title {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size: 18px;
    color: black;
    margin-bottom: 20px;
  }
  .product-desc {
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    margin-bottom: 35px;
    font-size: 12px;
  }
  .info-bottom {
    display: flex;
    justify-content: space-between;font-size: 20px;
  }
  .product-price {
    color: coral;
  }
</style>