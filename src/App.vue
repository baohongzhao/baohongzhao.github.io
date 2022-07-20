<template>
  <div id="app">
    <div>
      <keep-alive exclude="Cart,Profile,Detail">
        <router-view></router-view>
      </keep-alive>
    </div>
    <mainTabBar v-if="$route.meta.footShow"></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "@/components/content/mainTabBar/MainTabBar";

export default {
  name: 'App',
  components: {
    mainTabBar
  },
}
</script>

<style>
@import "assets/css/base.css";
</style>
