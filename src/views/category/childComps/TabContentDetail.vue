<template>
  <div id="content-detail">
    <goods-list-item v-for="(item, index) in showcategoryDetail" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem.vue'

export default {
  name:'TabContenDetail',
  props:{
    showcategoryDetail:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  #content-detail {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>