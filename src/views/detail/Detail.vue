<template>
  <div id="detail">
    <detail-nav-bar :index="currentIndex" @scrollTo="scrollTo"></detail-nav-bar>
    <b-scroll ref="scroll"
              :observe-d-o-m="true"
              :observe-image="true"
              :probe-type="3"
              :refresh-back="true"
              @scrollPosition="scroll"
              @refreshBack="refreshBack">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-goods-desc :goods-desc="goodsDesc"></detail-goods-desc>
      <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
      <detail-goods-detail :goodsDetail="goodsDetail"></detail-goods-detail>
      <detail-params :params="params" ref="detail_params"></detail-params>
      <detail-comment :comment="comment" ref="detail_comment"></detail-comment>
      <goods-list class="recommend" :goods="recommendList" ref="detail_recommend"></goods-list>
    </b-scroll>
    <back-top v-show="backTopIsShow" @click.native="scrollToTop"></back-top>
    <detail-button-bar @addToCart="addToCart"></detail-button-bar>
  </div>
</template>

<script>
import detailNavBar from "@/views/detail/childComponents/DetailNavBar";
import BScroll from "@/components/common/scroll/BScroll";
import detailSwiper from "@/views/detail/childComponents/DetailSwiper";
import detailGoodsDesc from "@/views/detail/childComponents/DetailGoodsDesc";
import detailShopInfo from "@/views/detail/childComponents/DetailShopInfo";
import detailGoodsDetail from "@/views/detail/childComponents/DetailGoodsDetail";
import detailParams from "@/views/detail/childComponents/DetailParams";
import detailComment from "@/views/detail/childComponents/DetailComment";
import goodsList from "@/components/content/goodsList/GoodsList";
import detailButtonBar from "@/views/detail/childComponents/DetailButtonBar";

import {getGoodsInfo, getRecommend, goods, shop, params} from "@/network/detail";
import {backTopMixin} from "@/common/mixin";

export default {
  name: "Detail",
  data () {
    return {
      iid: '',
      res: {},
      topImages: [],
      goodsDesc: {},
      shopInfo: {},
      goodsDetail: [],
      params: {},
      comment: [],
      recommendList: [],
      navBarPosition: 0,
      commentPosition: 0,
      recommendPosition: 0,
      currentIndex: 0,
    }
  },
  created() {
    this.iid = this.$route.query.iid;//获取商品iid

    this.getGoods(this.iid);//获取商品信息

    this.getGoodsList();//获取推荐商品列表
  },
  updated() {
    // this.paramsPosition = this.$refs.detail_params.$el.offsetTop;
    // this.commentPosition = this.$refs.detail_comment.$el.offsetTop;
    // this.recommendPosition = this.$refs.detail_recommend.$el.offsetTop;
    // console.log(this.paramsPosition);
    // console.log(this.commentPosition);
    // console.log(this.recommendPosition);
  },
  methods: {
    /**
     * 获取商品信息
     * */
    getGoods (iid) {
      getGoodsInfo(iid).then(res => {
        this.res = res
        let info = res.result;
        //轮播图片
        this.topImages = info.itemInfo.topImages;
        //商品信息
        this.goodsDesc = new goods(info.itemInfo,info.columns,info.shopInfo.services)
        //店铺信息
        this.shopInfo = new shop(info.shopInfo);
        //商品详情
        this.goodsDetail = info.detailInfo.detailImage[0].list;
        //商品尺寸参数
        this.params = new params(info.itemParams);
        //评论
        this.comment = info.rate.list;
      })
    },
    /**
     *获取推荐商品列表
     **/
    getGoodsList () {
      getRecommend().then(res => {
        this.recommendList = res.data.list;
      })
    },
    /**
     * 滑动切换导航栏
     * */
    scroll (position) {
      let y = -position.y;
      switch (true) {
        case y < this.paramsPosition:
          this.currentIndex = 0
          break
        case y >= this.paramsPosition && y < this.commentPosition:
            this.currentIndex = 1
          break
        case y >= this.commentPosition && y < this.recommendPosition:
          this.currentIndex = 2
          break
        case y >= this.recommendPosition:
          this.currentIndex = 3
          break
      }
      //回到顶部显示判断
      this.backTopIsShow = document.body.clientHeight + position.y <= 0;
    },
    /**
     * 点击导航栏滚到相应位置
     * */
    scrollTo(index) {
      let position = 0
      switch (index) {
        case 0:
          position = 0
          break
        case 1:
          position = this.paramsPosition
          break
        case 2:
          position = this.commentPosition
          break
        case 3:
          position = this.recommendPosition
      }
      this.$refs.scroll.scrollTo(0, -position);
    },
    /**
     * 加入购物车
     * */
    addToCart() {
      let goods = {};
      goods.img = this.topImages[0];
      goods.title = this.goodsDesc.title;
      goods.desc = this.goodsDesc.desc;
      goods.price = this.goodsDesc.nowPrice;
      goods.num = 1;
      goods.iid = this.iid;
      goods.checked = true;
      this.$store.dispatch('addToCart', goods).then(res => {
        // this.$toast.show(res);
        this.$toast({message: res});
      })
    },
    refreshBack () {
      this.paramsPosition = this.$refs.detail_params.$el.offsetTop;
      this.commentPosition = this.$refs.detail_comment.$el.offsetTop;
      this.recommendPosition = this.$refs.detail_recommend.$el.offsetTop;
    }
  },
  mixins: [backTopMixin],
  components: {
    detailNavBar,
    BScroll,
    detailSwiper,
    detailGoodsDesc,
    detailShopInfo,
    detailGoodsDetail,
    detailParams,
    detailComment,
    goodsList,
    detailButtonBar,
  }
}
</script>

<style scoped>
#detail{
  height: 100vh;
}
.wrapper{
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.recommend{padding-top: 20px;}
</style>