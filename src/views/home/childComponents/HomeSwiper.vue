<template>
  <swiper>
    <swiper-item v-for="v in banner">
      <a :href="v.link">
        <img :src="v.image" alt="v.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {swiper,swiperItem} from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    banner : {
      type: Array,
      default () {
        return [];
      }
    }
  },
  components: {
    swiper,
    swiperItem,
  }
}
</script>

<style scoped>

</style>