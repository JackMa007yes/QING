<template>
  <div >
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div  v-for='(item,index) in titles' :key="index"  @click="choose(index)" :class="{'active':index === currentIndex}"
        >{{item}}</div>
      </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name:'DetailNavBar',
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar,
  },
  methods:{
    choose(index){
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  }
}
</script>

<style>
  .title {
    display: flex;
    justify-content: space-around;
    font-size: 13px;
    line-height: 44px;
  }
  .active{
    color: red;
  }
  .back img{
    position: relative;
    top: 6px;
  }
</style>