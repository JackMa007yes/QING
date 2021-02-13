<template>
    <swiper class="swiperItem">
      <swiper-item v-for="(item,key) in topImages" :key='key' >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name:'DetailSwiper',
  props:{
    topImages:{
      type:Array,
      default(){
        return {}
      }
    }
  },
  components: { 
    Swiper,
    SwiperItem
    },

}
</script>

<style>
.swiperItem{
  height:300px;
  overflow: hidden;
}
</style>