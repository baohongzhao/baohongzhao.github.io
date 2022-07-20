<template>
  <nav-bar>
    <div class="back" slot="left" @click="backClick">
      <img src="~assets/img/common/back.png" alt="">
    </div>
    <div slot="center" class="title">
      <div v-for="(item, index) in titles"
           class="title_item"
           :class="{active: currentIndex === index}"
           @click="itemClick(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import navBar from "@/components/common/navBar/NavBar";

export default {
  name: "DetailNavBar",
  props: {
    index: {
      type: Number,
      default: 0,
    }
  },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.$emit('scrollTo', index);
    },
    backClick () {
      this.$router.back();
    },
  },
  watch: {
    index (res) {
      this.currentIndex = res;
    }
  },
  components: {
    navBar,
  },
}
</script>

<style scoped>
  .title{
    display: flex;
  }
  .title_item{
    flex: 1;
    font-size: 13px;
  }
  .active{
    color: var(--color-high-text);
  }
  .back{
    text-align: center;
  }
  .back img{
    width: 24px;
    vertical-align: middle;
  }
</style>