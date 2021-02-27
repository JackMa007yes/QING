<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <scroll class="menu-wrapper" ref="menuScroll">
        <tab-menu :categories = 'categories' @selectItem="selectItem"/>
      </scroll>
      <scroll class="tab-content" ref="scroll">
        <div>
          <tab-content-category :subcategories="showSubcategory"/>
          <tab-control class="tab-control"  
                    :title="['综合','新品','销量']" @tabClick='tabClick'  />
          <tab-content-detail :showcategoryDetail='showcategoryDetail'/>
        </div>
      </scroll>
    </div>   
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  import { getCategory,getSubcategory,getCategoryDetail} from 'network/category.js'

  import NavBar from 'components/common/navbar/NavBar.vue'
  import TabMenu from './childComps/TabMenu.vue'
  import TabContentCategory from './childComps/TabContentCategory.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue';
  import TabContentDetail from './childComps/TabContentDetail.vue'
  import {itemListenerMixin} from 'common/mixin'

  export default {
    name: "Category",
    data(){
      return {
        categories:[],
        categoryData:{},
        currentIndex:-1,
        currentType:'pop'
      }
    },
    created(){
      this._getCategory()
    },
    activated(){
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.$bus.$off('itemImgLoad',this.itemImgListener)
    },
    methods:{
      _getCategory() {
        getCategory().then(res => {
        this.categories = res.data.category.list
          for(let i=0; i<this.categories.length ; i++){
            this.categoryData[i] = {
              subcategories : {},
              categoryDetail : {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this._getSubcategories(0)
        })
        
      },
      _getSubcategories(index){
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
          this._getCategoryDetail('pop')
          this._getCategoryDetail('new')
          this._getCategoryDetail('sell')   
        })
      },
      _getCategoryDetail(type){
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey,type).then(res => {
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryDate = {...this.categoryData}
        })
      },
      //事件相关
      selectItem(index){
        this._getSubcategories(index)
        this.$refs.scroll.scrollTo(0,0,0)
      },
      tabClick(index){
        if(index === 0){
          this.currentType = 'pop'
        }else if(index === 1){
          this.currentType = 'new'
        }else{
          this.currentType = 'sell'
        }
        console.log(this.showcategoryDetail)
      }
    },
    computed:{
      showSubcategory(){
        if(this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showcategoryDetail(){
        if (this.currentIndex === -1) return [] 
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    mounted(){
      setTimeout(() => {
        this.$refs.menuScroll.refresh()
        // this.$refs.scroll2.refresh()
      }, 500);
    },
    components:{
        Scroll,
        NavBar,
        TabMenu,
        TabContentCategory,
        TabControl,
        TabContentDetail,
    },
    mixins:[itemListenerMixin]
  }
</script>

<style scoped>
  .category {
    height: 100vh;
  }
  .nav-bar {
    background-color: var(--color-tint);
    color: white;
    font-size: 18px;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    display: flex;
    overflow: hidden;
  }
  .menu-wrapper {
    height: 100%;
    overflow: hidden;
  }
  .tab-content {
    height: 100%;
    flex: 1;
  }
  .tab-control {
    margin-top: 10px;
    font-size: 12px;
  }
</style>
