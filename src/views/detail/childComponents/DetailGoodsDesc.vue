<template>
  <div class="goods_info">
    <div class="title">{{goodsDesc.title}}</div>
    <div class="price">
      <span class="new_price">{{goodsDesc.price}}</span>
      <del class="old_price">{{goodsDesc.oldPrice}}</del>
      <span class="desc">{{goodsDesc.discountDesc}}</span>
    </div>
    <div class="columns">
      <p v-for="v in goodsDesc.columns">{{v}}</p>
    </div>
    <div class="services">
      <p v-for="v in goodsDesc.services">
        <img :src="v.icon" alt="" v-if="v.icon">
        <span>{{ v.name }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsDesc: {
      type: Object,
      default () {
        return {};
      }
    }
  },
}
</script>

<style scoped>
.goods_info{
  width: 100%;
  padding: 0 10px;
  border-bottom: 4px solid #f6f6f6;
}
.title{
  padding-top: 10px;
  color: #333;
  font-size: 16px;
}
.price{
  margin-top: 10px;
  line-height: 24px;
}
.new_price{
  font-size: 20px;
  color: var(--color-high-text);
}
.old_price{
  font-size: 13px;
  color: #999;
  margin: 0 10px;
}
.desc{
  background-color: var(--color-tint);
  color: #FFF;
  font-size: 14px;
  padding: 2px 5px;
  border-radius: 10px;
  vertical-align: text-bottom;
}
.columns{
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  justify-content:space-between;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
}
.columns p{
  font-size: 14px;
  color: #999;
  text-align: center;
}
.services{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
}
.services p{
  font-size: 12px;
}
.services p img{
  width: 12px;
  vertical-align: text-top;
}
</style>