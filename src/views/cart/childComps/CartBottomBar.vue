<template>
  <div class="bottom-bar-wrapper">
  <div id="bottom-bar">
    <div class="check-content">
      <check-button 
        class="check-button" 
        :is-checked='isSelectAll' 
        @click.native='selectAll' />
      <span> 全选</span>
    </div>
    <div class="submit">
      合计：{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      去结算({{checkLength}})
    </div>
  </div>
  </div>
</template>

<script>
import CheckButton from "@/components/content/checkButton/CheckButton.vue"

export default {
  components: { CheckButton },
  name:'CarBottomBar',
  methods:{
    selectAll(){
      if(this.isSelectAll){
        this.$store.getters.cartList.forEach(item => {
          item.checked = false
        });
      } else {
        this.$store.getters.cartList.forEach(item => {
          item.checked = true
      })
      }
    },
    calcClick(){
      const hasSelect = this.$store.getters.cartList.find(item => item.checked)
      if(!hasSelect){
        this.$toast.show('请选择购买商品')
      }
    }
  },
  computed:{
    totalPrice(){
      return '￥' + this.$store.getters.cartList.filter(item => item.checked)
      .reduce((sum,item) => {
      return sum + item.count*item.price
    },0).toFixed(2)
    },
    checkLength(){
      return this.$store.state.cartList.filter(item=> item.checked).reduce((sum,item)=>{
        return sum + item.count
      },0)
    },
    isSelectAll(){
      // return !(this.$store.getters.cartList.filter(item => !item.checked).length)
      if(this.$store.getters.cartList.length !== 0){
        return !this.$store.getters.cartList.find(item => !item.checked)
      } else {
        return false
      }
    }
  }
}  
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
  }
  #bottom-bar {
    background-color: rgb(220,220,220);
    
    z-index: 9;
    display: flex;
    justify-content: space-between;
  }
  .check-content {
    display: flex;
    align-items: center;
    line-height: 40px;
    margin: auto 0;
    margin-left: 10px;
  }
  .check-content span{
    padding: 0 5px;
  }
  .check-button {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
  }
  .submit {
    line-height: 40px;
  }
  .calculate {
    /* float:right; */
    line-height: 40px;
    padding:0 20px;
    background-color: var(--color-high-text);
    font-weight: 500;
  }
</style>