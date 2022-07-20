<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bscroll from "better-scroll";

export default {
  name: "BScroll",
  data () {
    return {
      scroll: null,
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    observeDOM: {
      type: Boolean,
      default: false,
    },
    observeImage: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new bscroll(this.$refs.wrapper, {
      click: true,
      observeDOM: this.observeDOM,//就是说 observe-dom 这个属性会在 better-scroll 内部帮我们监听 content 的高度变化，自动的帮我们调用内部的 refresh，再也不用为了图片内容在better-scroll对象创建的时候没加载出来导致不能滚动而到处的refresh了。
      observeImage: this.observeImage,//开启对 wrapper 子元素中图片元素的加载的探测。无论图片的加载成功与否，都会自动调用 BetterScroll 的 refresh 方法来重新计算可滚动的宽度或者高度，新增于 v2.1.0 版本。
      probeType: this.probeType,
      mouseWheel: true,
      pullUpLoad: this.pullUpLoad,
    })

    // 2.事件滚动
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on('scroll', (position) => {//监听scroll滑动
        // console.log(position)
        this.$emit('scrollPosition', position);
      })
    }

    // 3.上拉加载
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('scrollPullingUp');
      })
    }
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    finishedPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    scrollTo(x, y, time=500) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>
</style>