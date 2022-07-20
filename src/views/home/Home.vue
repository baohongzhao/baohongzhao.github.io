<template>
  <div id="home">
    <nav-bar class="home_nav"><p slot="center">购物街</p></nav-bar>

    <scroll class="wrapper"
            @scrollPosition="scrollPosition"
            :probe-type="3"
            :pull-up-load="true"
            ref="scroll"
            @scrollPullingUp="scrollPullingUp">
      <home-swiper :banner="banner"></home-swiper>

      <recommend :recommend="recommend"></recommend>

      <tab-control :titles="tab_control_title" @tabclick="tabClick" ref="tab_control"></tab-control>

      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top v-show="backTopIsShow" @click.native="scrollToTop"></back-top>

    <tab-control :titles="tab_control_title" @tabclick="tabClick" ref="tab_control_replace" class="tab_control_replace" v-show="tabIsShow"></tab-control>
  </div>
</template>

<script>
import navBar from "@/components/common/navBar/NavBar";
import homeSwiper from "@/views/home/childComponents/HomeSwiper";
import recommend from "@/views/home/childComponents/Recommend";
import tabControl from "@/components/content/tabControl/TabControl";
import goodsList from "@/components/content/goodsList/GoodsList";
import scroll from "@/components/common/scroll/BScroll";
import backTop from "@/components/content/backTop/BackTop";
import tabControlReplace from "@/components/content/tabControl/TabControl";
import {getMultiData, getHomeGoods} from "@/network/home";
import {debounce} from "@/common/utils";

export default {
  name: "Home",
  data () {
    return {
      banner: [],
      recommend: [],
      tab_control_title: ['流行', '新款', '精选'],
      goodsType: 'pop',
      goods: {
        pop: {page: 0, list: [],},
        new: {page: 0, list: [],},
        sell: {page: 0, list: [],},
      },
      tabIsShow: false,
      tabHeight: 0,
      backTopIsShow: false,
      // saveY: 0,
    }
  },
  created() {
    this.getMultiData();

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  updated() {
    // this.tabHeight = this.$refs.tab_control.$el.offsetTop - this.$refs.tab_control.$el.clientHeight;
    this.tabHeight = this.$refs.tab_control.$el.offsetTop;//商品选项卡距离顶部高度
  },
  activated() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);//接收防抖函数
    //事件总线,接收事件,发送事件在GoodsListItem.vue文件,配置在main.js文件
    //事件总线要及时释放不然会容易产生bug
    this.$bus.$on('imgLoad', () => {
      refresh();//调用防抖函数
    })
    //console.log(this.saveY);
    //this.$refs.scroll.scrollTo(0, this.saveY, 0);
    //this.$refs.scroll.refresh();
  },
  deactivated() {
    //this.saveY = this.$refs.scroll.scroll.y;
    //console.log(this.saveY);
    this.$bus.$off('imgLoad');//释放事件
  },
  methods: {
    /**
     * 获取轮播,推荐接口数据
     * */
    getMultiData () {
      getMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    /**
     * 获取首页商品接口数据
     * */
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        // this.goods[type].list = this.goods[type].list.concat(res.data.list);
        this.goods[type].page += 1;
      })
    },

    /**
     * 接收商品选项卡索引
     * */
    tabClick (index) {
      switch (index) {
        case 0:
          this.goodsType = 'pop'
          break
        case 1:
          this.goodsType = 'new'
          break
        case 2:
          this.goodsType = 'sell'
          break
      }
      this.$refs.tab_control.currentIndex = index;
      this.$refs.tab_control_replace.currentIndex = index;
    },

    /**
     * 商品选项卡吸顶效果
     * */
    scrollPosition (position) {
      /*console.log(this.tabHeight);
      console.log(position);*/
      this.tabIsShow = this.tabHeight + position.y <= 0;
      this.backTopIsShow = document.body.clientHeight + position.y <= 0;
    },
    /**
     * 回到顶部
     * */
    scrollToTop () {
      this.$refs.scroll.scrollTo(0,0);
    },
    /**
     * 上拉加载更多
     * */
    scrollPullingUp () {
      this.getHomeGoods(this.goodsType);
      this.$refs.scroll.finishedPullUp();
    },

  },


  computed: {
    showGoods () {
      return this.goods[this.goodsType].list;
    }
  },

  components: {
    navBar,
    homeSwiper,
    recommend,
    tabControl,
    goodsList,
    scroll,
    backTop,
    tabControlReplace,
  },
}
</script>

<style scoped>
.home_nav{
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
#home{
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.wrapper{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.tab_control_replace{
  position: fixed;
  top: 44px;
  z-index: 10;
  width: 100%;
}
</style>
