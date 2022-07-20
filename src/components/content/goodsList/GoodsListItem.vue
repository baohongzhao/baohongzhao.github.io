<template>
  <div class="goods_list_item" @click="itemClick">
<!--    <img :src="this.goodsInfo.show ? this.goodsInfo.show.img : this.goodsInfo.image" alt="" @load="imgLoad">-->
    <img alt="" @load="imgLoad" :src="this.goodsInfo.show.img">
    <div class="goods_title">
      <p>{{goodsInfo.title}}</p>
      <p><span class="price">{{goodsInfo.price}}</span><i class="save"></i>{{goodsInfo.cfav}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsInfo: {
      type: Object
    }
  },
  created() {
    // console.log(this.showImage);

  },
  methods: {
    imgLoad () {
      this.$bus.$emit('imgLoad');//事件总线,发射事件,接收事件在Home.vue文件,配置在main.js文件
    },
    itemClick () {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsInfo.iid,
        },
      })
    }
  },
  /*computed: {
    showImage() {
      this.imgUrl = 1;
      return this.goodsInfo.img || this.goodsInfo.image || this.goodsInfo.show.img
    }
  },*/
}
</script>

<style scoped>
.goods_list_item{
  width: 47%;
  position: relative;
  padding-bottom: 40px;
}
.goods_list_item img{
  width: 100%;
  border-radius: 5px;
}
.goods_title{
  position: absolute;
  bottom: 5px;
  width: 100%;
  text-align: center;
}
.goods_title p{
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 18px;
}
.goods_title .price{
  color: var(--color-high-text);
}
.goods_title .save{
  background-image: url("~assets/img/home/save.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-left: 5px;
  vertical-align: top;
}
</style>