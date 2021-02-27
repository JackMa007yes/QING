<template>
  <div class="tab-menu" >
      <div class="menu-item " 
          v-for="(item, index) in categories"
          :key="index"
          :class="{active:isActive === index}"
          @click="itemClick(index)">
        {{item.title}}
      </div>
  </div>
</template>

<script>
// import Scroll from '@/components/common/scroll/Scroll.vue'
export default {
  // components: { Scroll },
  name:'TabMenu',
  props:{
    categories:{
      type:Array
    }
  },
  data(){
    return {
      isActive:0
    }
  },
  methods:{
    itemClick(index){
      this.isActive = index
      this.$emit('selectItem',index)
    }
  },
 
}
</script>

<style scoped>
.tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 25vw;
  box-sizing: border-box;
  /* overflow: hidden; */
}
.menu-item {
  font-size: 14px;
  height: 45px;
  line-height: 45px;
  text-align: center;
}
.active {
  background-color: #fff;
  font-weight: 600;
  color: var(--color-tint);
  border-left: 3px solid var(--color-tint);
}
</style>