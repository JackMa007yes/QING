<template>
  <div class="tab-content-category">
    <div class="item" v-for="(item, index) in subcategories.list" :key='index'>
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabContentCategory',
  props:{
    subcategories:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
  .tab-content-category {
    /* color: red; */
    display: flex;
    flex-wrap: wrap;
    width: 75vw;
    /* justify-content: space-evenly; */
    justify-content: start;
    /* margin: 0 20px; */
  }
  .item {
    width: 18vw;
    margin-top: 15px;
    margin-left: 5.5vw;
  }
  .item-img {
    max-width: 100%;
    max-height: 100%;
    text-align: center;
  }
  .item-text {
    margin-top: 8px;
    font-size: 12px;
    text-align: center;
  }
</style>