<template>
<div>
  <keep-alive exclude="Detail,Cart">
  <router-view></router-view>
  </keep-alive>
  <main-tab-bar/>
</div>
</template>

<script>
import MainTabBar from 'components/content/tabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar,
  },
}
</script>

<style>
  @import './assets/css/base.css'
</style>
