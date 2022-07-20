<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="tab_bar_item_img" src="~assets/img/tabbar/home.png" alt="">
      <img slot="tab_bar_item_img_on" src="~assets/img/tabbar/home_on.png" alt="">
      <p slot="tab_bar_item_text">首页</p>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="tab_bar_item_img" src="~assets/img/tabbar/category.png" alt="">
      <img slot="tab_bar_item_img_on" src="~assets/img/tabbar/category_on.png" alt="">
      <p slot="tab_bar_item_text">分类</p>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="tab_bar_item_img" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="tab_bar_item_img_on" src="~assets/img/tabbar/cart_on.png" alt="">
      <p slot="tab_bar_item_text">购物车</p>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="tab_bar_item_img" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="tab_bar_item_img_on" src="~assets/img/tabbar/profile_on.png" alt="">
      <p slot="tab_bar_item_text">我的</p>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import tabBar from "@/components/common/tabbar/TabBar";
import tabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components : {
    tabBar,
    tabBarItem,
  }
}
</script>

<style scoped>

</style>