<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item,key) in recommends" :key="key">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'recommend-view',
    props:{
        recommends:{
            type:Array,
            default(){
                return[]
            }
        }
    }
}
</script>

<style>
.recommend {
    display: flex;
    justify-content:space-around;
    padding: 15px 0 25px 0;
    /* box-shadow: 0 -3px 6px grey; */
    border-bottom: 8px solid #eee;
}
.recommend-item{
    /* flex:1; */
    width: 22vw;
    text-align: center;
    font-size: 13px;
}
.recommend-item img{
    margin-bottom: 5px;
    max-width: 100%;
}
</style>