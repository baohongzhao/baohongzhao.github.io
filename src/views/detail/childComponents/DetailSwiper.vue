<template>
  <swiper class="swiper">
    <swiper-item v-for="item in topImages" class="swiper_img">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {swiper, swiperItem} from "@/components/common/swiper";

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  components: {
    swiper,
    swiperItem
  }
}
</script>

<style scoped>
.swiper{
  height: 0;
  padding-bottom: 100%;
}
.swiper_img{
  position: relative;
  top: 50%;
  transform: translateY(-25%);
}
</style>