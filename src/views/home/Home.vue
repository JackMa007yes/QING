<template>
  <div id="home" >
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control  tab-control2" 
                :title="['流行','新款','精选']" @tabClick='tabClick'  ref="tabControl1" v-show='isTabFixed'/>
    <scroll class="content" 
        ref="scroll"          
        :probe-type='3'    
        @scroll="contentScroll" 
        :pull-up-load='true' @pullingUp='loadMore'> 
          <HomeSwiper :banners='banners' @swiperImgLoad='swiperImgLoad'></HomeSwiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view/>
        <tab-control class="tab-control"  
                    :title="['流行','新款','精选']" @tabClick='tabClick'  ref="tabControl2" />
        <goods-list :goods="goods[currentType].list">
        </goods-list>
    </scroll>
        <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import HomeSwiper from './childComps/homeSwiper.vue'
import RecommendView from './childComps/recommendView.vue'
import FeatureView from './childComps/FeatureView'


import {getHomeMuilidata,getHomeGoods} from 'network/home.js'
import {itemListenerMixin,backTopMixin} from 'common/mixin'

  export default {
    name: "Home",
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isShow:false,
        taboffsettop:0,
        isTabFixed:false,
        saveY:0,
      }
    },
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
    },
    created(){
      this.getHomeMuilidata()
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated(){
      this.saveY = this.$refs.scroll.scroll.y
      // console.log(this.$refs.scroll.scroll.y)
      //取消全局事件的监听
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    // mounted(){
    //   const refresh = this.debounce(this.$refs.scroll.refresh,5)
    //   console.log(2222222222222222)
    //   this.itemImgListener = () => refresh()
    //   this.$bus.$on('itemImageLoad',this.itemImgListener)
    // },
    methods:{
      //事件监听相关方法
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      // debounce(func,delay){
      //   let timer = null
      //   return function(){
      //     if(timer) clearTimeout(timer)
      //     timer = setTimeout(() => {
      //       func.apply(this)
      //     }, delay);
      //   }
      // },
      tabClick(index){
        this.currentType = Object.keys(this.goods)[index]
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      contentScroll(position){
        this.isShow = (-position.y) > 800
        //判断tabcontrol是否吸顶
        this.isTabFixed = (-position.y) > this.offsetTop
      },
      swiperImgLoad(){
        this.offsetTop = this.$refs.tabControl2.$el.offsetTop
      },
   
      //网络请求相关方法
      getHomeMuilidata(){
        getHomeMuilidata().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    mixins:[itemListenerMixin,backTopMixin]
      
  }



</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav{
    background-color: var(--color-tint);
    color: white;
    font-size: 18px;
    /* margin-top: -44px; */
    /* position:fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 10; */
  }

  .tab-control2{
    position: relative; 
    z-index: 9;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>