<template>
  <div class="goods_list">
    <goods-list-item v-for="v in goods" :goods-info="v" class="item"></goods-list-item>
  </div>
</template>

<script>
import goodsListItem from "@/components/content/goodsList/GoodsListItem";

export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
    }
  },
  components: {
    goodsListItem,
  }
}
</script>

<style scoped>
.goods_list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>