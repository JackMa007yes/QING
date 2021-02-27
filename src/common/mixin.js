import BackTop from "components/common/backTop/BackTop.vue";

export const itemListenerMixin = {
  data(){
      return {itemImgListener:null,}
  },
  mounted(){
    const refresh = this.debounce(this.$refs.scroll.refresh,5)
    this.itemImgListener = () => refresh()
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
  methods:{
    debounce(func,delay){
      let timer = null
      return function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this)
        }, delay);
      }
    },
  }
}

export const backTopMixin = {
  data(){
    return {
      isShow:false,
    }
  },
  methods:{
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
  },
  components:{
    BackTop,
  }
}