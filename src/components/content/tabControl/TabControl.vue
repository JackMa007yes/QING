<template>
  <div class="tab-control">
    <div  class="tab-control-item" v-for="(item,index) in title" :key='index' :class='{active:index === currentIndex}' @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {currentIndex:0}
  },
  methods:{
    itemclick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
    z-index: 9;
  }
  .tab-control-item{
    flex:1;
    width: 10vw;
  }
  .active span{
    padding: 8px;
    border-bottom: 3px solid #ff8198;
    color: #ff5777;
  }
</style>