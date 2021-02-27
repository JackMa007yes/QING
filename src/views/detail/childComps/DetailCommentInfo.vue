<template>
    <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
      <div class="info-header clear-fix">
        <div class="header-title">用户评价</div>
        <div class="header-more">
          更多
        </div>
        <i class="arrow-right"></i>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="">
        <span>{{commentInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commentInfo.content}}</p>
        <div class="info-other">
          <span class="data">{{commentInfo.created | showDate }}</span>
          <span>{{commentInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
        </div>
      </div>
    </div>
</template>

<script>
import {formatDate} from '/src/common/utils.js'


export default {
  name:'DetailCommentInfo',
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showDate(value){
      const date = new Date(value*1000)
      return formatDate(date,'yyyy-MM-dd')
    }
  },
  created(){
   console.log(this.commentInfo)
  }
}
</script>

<style>
.comment-info {
  border-bottom: 8px solid rgb(242,245,248);
  margin-bottom: 10px;
}

.info-header {
  font-size: 16px;
  margin: 10px 10px 3px 10px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgb(233, 230, 230);
  
}
.header-title {
  float: left;
  line-height: 44px;
}
.header-more {
  float: right;
  line-height: 44px;
}
.info-user {
  padding:5px 10px;
}
.info-user img{
  height: 50px;
  border-radius: 50%;
  vertical-align: middle;
}
.info-user span {
  /* position: relative; */
  margin-left: 10px;
  line-height: 50px;
  font-size: 16px;
}
.info-detail {
  margin: 5px 15px;
}
.info-detail p {
  font-size: 14px;
  color: #666;
  line-height: 1.5em;
  padding-bottom: 10px;
}
.info-other {
  font-size: 13px;
  color: #999;
}
.info-other span {
  padding-right:8px;
}
.info-imgs {
  display: flex;
  justify-content: start;
  margin-top: 10px;
}
.info-imgs img {
  height: 120px;
  margin-right: 8px;
}
</style>