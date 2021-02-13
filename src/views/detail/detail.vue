<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <!-- <detail-nav-bar class="detail-nav" /> -->

    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :param-info="paramInfo"/>
      <!-- <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop='shop' />
      <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'/>
      <detail-param-info :param-info='paramsInfo'/> -->
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'
import {getDetail,Goods,Shop,GoodsParam} from 'network/detail';
import DetailSwiper from './DetailSwiper.vue';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo'

import Scroll from 'components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue';
import DetailParamInfo from './childComps/DetailParamInfo.vue';


export default { 
  name:'Detail',
  data(){
    return {
      // iid:null,
      // topImages:[],
      // goods:{},
      // shop:{},
      // detailInfo:{},
      // paramInfo:{}
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    }
  },
  components:{
    // DetailNavBar,
    // DetailSwiper,
    // DetailBaseInfo,
    // DetailShopInfo,
    // Scroll,
    // DetailGoodsInfo,
    // DetailParamInfo,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    Scroll
    
  },
  created(){
    // this.iid = this.$route.params.id
    // getDetail(this.iid).then(res => {
    //   const data = res.result
    //   this.topImages = data.itemInfo.topImages
    //   //获取商品链接
    //   this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
    //   //店铺信息
    //   this.shop = new Shop(data.shopInfo)
    //   //详情数据
    //   this.detailInfo = data.detailInfo;
    //   //获取参数信息
    //   this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
    // })
         // 1.保存传入的iid
        this.iid = this.$route.params.id
         // 2.根据iid请求详情数据
        getDetail(this.iid).then(res => {
        // 1.获取顶部的图片轮播数据
        console.log(res);
        const data = res.result;
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)

        // 4.保存商品的详情数据
        this.detailInfo = data.detailInfo;

        // 5.获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      })
  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  }
}
</script>
g
<style scope>
 #detail {
    padding-top: 44px;
    /* position: relative; */
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .detail-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /* z-index: 9; */
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
  }
</style>