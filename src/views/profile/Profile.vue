<template>
  <div class="profile">
    <nav-bar class="profile-nav">
      <div slot="center">商城</div>
    </nav-bar>
    <user-info/>
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">0.00</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">16</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">100</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <list-view :listData="orderList"/>
    <list-view :listData="serviceList"/>
  </div>
   
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import UserInfo from './childComps/UserInfo.vue'
  import ListView from './childComps/ListView.vue'

  export default {
    name: "Profile",
    components:{
      NavBar,
      UserInfo,
      ListView,
    },
    data() {
		  return {
		    orderList: [
          {icon: 'icon-xiaoxi', iconColor: 'red', info: '我的消息'},
          {icon: 'icon-jifen', iconColor: 'gold', info: '积分商城'},
          {icon: 'icon-huiyuan-', iconColor: 'gold', info: '会员卡'},
        ],
        serviceList: [
          {icon: 'icon-gouwuche', iconColor: 'blue', info: '我的购物车'},
          {icon: 'icon-APP', iconColor: '#ff8198', info: '下载购物APP'},
        ]
      }
    },
  }
</script>

<style scoped>
  .profile {
    background-color: #f2f2f2;
  }

  .profile-nav {
    background-color: var(--color-tint);
    color: white;
    font-size: 18px;
  }
  .account {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }
  .account-item {
    flex: 1;
    text-align: center;
    padding: 25px 0;
    background-color: #fff;
    margin-right: 1px ;
  }
  .balance {
    color: var(--color-tint);
    font-size: 24px;
    font-weight: 550;
  }
  .account-info {
    font-size: 12px;
    margin-top: 5px;
  }
</style>
