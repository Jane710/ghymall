<template>
  <div id="app">
     <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MainTabBar />
  </div>
</template>

<script>

import MainTabBar from "./components/content/maintarbar/MainTarBar";
export default {
  components: {
    MainTabBar
  }
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
