import backTop from "@/components/content/backTop/BackTop";

export const backTopMixin = {
  data () {
    return {
      backTopIsShow: false,
    }
  },
  components: {
    backTop,
  },
  methods: {
    /**
     * 回到顶部
     * */
    scrollToTop () {
      this.$refs.scroll.scrollTo(0,0);
    },
  }
}