<template>
  <div class="list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <i :class="item.icon" class="icon iconfont " :style="{ color:item.iconColor}"></i>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ListView',
  props: {
		listData: {
		  type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style>
  .list {
    margin-top: 8px;
    background-color: #fff;
    font-size: 15px;
    color: #333;
  }
  .list .item {
    height: 44px;
    line-height: 44px;
    /* position: relative; */
    display: flex;
    /* justify-content: space-between; */
  }
  .list .item i {
    margin-left: 15px;
    height: 44px;
    width: 30px;
    font-size: 18px;
    text-align: center;

  }
  .info {
    /* margin-left: 40px; */
    border-bottom: 1px solid rgba(100, 100, 100, .1);
    padding-left: 5px;
    flex: 1;
  }
  .item:last-of-type .info {
    border-bottom: none;
  }
</style>