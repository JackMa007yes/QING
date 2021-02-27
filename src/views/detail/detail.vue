<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"  @titleClick='titleClick' ref="nav"/>

    <scroll  ref="scroll" class="wrapper ignore" :probeType='3' @scroll="contentScroll">
    <detail-swiper :top-images="topImages" ref="swiper"/>
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
    <detail-param-info :param-info="paramInfo" ref="params"/>
    <detail-comment-info :comment-info="commentInfo" ref="comment"/>
    <goods-list :goods="recommend" ref="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart='addToCart' class="bottom"/>
    <back-top v-show="isShow" @click.native="backClick"  />
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/childComps/DetailNavBar.vue";
import DetailSwiper from "./DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailBottomBar from './childComps/DetailBottomBar'



import Scroll from "components/common/scroll/Scroll.vue";
import {itemListenerMixin,backTopMixin} from 'common/mixin'

import { mapActions } from 'vuex'

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopY:[],
      currentIndex:0,
      isShow:false
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.id;
    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // 1.获取顶部的图片轮播数据
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 2.获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.创建店铺信息的对象
      this.shop = new Shop(data.shopInfo);
      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;
      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  destroyed(){
    this.$bus.$off('itemImg',this.itemImgListener)
  },
  methods: {
    ...mapActions(['addCart']),
    imageLoad() {
      this.$refs.scroll.refresh()
      this.themeTopY = []
      this.themeTopY.push(this.$refs.swiper.$el.offsetTop)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-(this.themeTopY[index]-44),200)
    },
    contentScroll(position){
      // console.log(position)
      const y = -position.y + 44
      // console.log(this.themeTopY)
      if(y >= this.themeTopY[0] && y < this.themeTopY[1]){
        this.currentIndex = 0
        // console.log(1)
      }else if(y >= this.themeTopY[1] && y < this.themeTopY[2]){
        this.currentIndex = 1
        // console.log(2)
      }else if(y >= this.themeTopY[2] && y < this.themeTopY[3]){
        this.currentIndex = 2
      }else { this.currentIndex = 3 }
      this.$refs.nav.currentIndex = this.currentIndex
      this.isShow = (-position.y) > 800
    },
    addToCart(){
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.price = this.goods.realPrice
      product.desc = this.goods.desc
      product.iid = this.iid
      console.log(product)
      // this.$store.dispatch('addCart',product)
      this.addCart(product).then(res => {
        this.$toast.show(res,2000)
      })
      
    }
  },
  mixins:[itemListenerMixin,backTopMixin]
};
</script>

<style scoped>
#detail {
    position: relative;
    z-index: 1;
    background-color: #fff;
    height: 100vh;
    padding-top: 44px;
  } 

.detail-nav {
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
  }

.wrapper {
    background-color:#fff;
    height: calc(100% - 44px);
    overflow: hidden;
  }
.bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  /* border: 5px solid red; */
}
</style>