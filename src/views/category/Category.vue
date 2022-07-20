<template>
  <div>
    <b-scroll ref="scroll" :observe-d-o-m="true" :observe-image="true">
      <goods-list :goods="recommendList"></goods-list>
    </b-scroll>
  </div>
</template>

<script>
import goodsList from "@/components/content/goodsList/GoodsList";
import BScroll from "@/components/common/scroll/BScroll";
import {getGoodsInfo, getRecommend, goods, shop, params} from "@/network/detail";

export default {
  name: "category",
  data () {
    return {
      recommendList: [],
    }
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    /**
     *获取推荐商品列表
     **/
    getGoodsList () {
      getRecommend().then(res => {
        this.recommendList = res.data.list;
      })
      //this.goodsList = getRecommend();
    },
  },
  components: {
    goodsList,
    BScroll,
  }
}
</script>

<style scoped>
.wrapper{
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
