<template>
  <div class="shop">

    <div class="shop_title">
      <img :src="shopInfo.shopLogo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>

    <div class="shop_info">

      <div class="left">
        <div class="left_item">
          <p>{{shopInfo.sells | sell}}</p>
          <p class="left_item_title">总销量</p>
        </div>
        <div class="left_item">
          <p>{{shopInfo.goods}}</p>
          <p class="left_item_title">全部宝贝</p>
        </div>
      </div>

      <div class="center"></div>

      <div class="right">
        <table>
          <tr v-for="v in shopInfo.score">
            <td class="right_name">{{v.name}}</td>
            <td class="right_score" :class="{on: v.isBetter}">{{v.score}}</td>
            <td v-if="v.isBetter" class="right_better" :class="{on: v.isBetter}">高</td>
            <td v-else class="right_better" :class="{on: v.isBetter}">低</td>
          </tr>
        </table>
      </div>

    </div>

    <button class="shop_enter">进店逛逛</button>

  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    sell (num) {
      num = parseInt(num);
      if (num > 10000) {
        num = (num / 10000).toFixed(1) + '万';
      }
      return num;
    }
  }
}
</script>

<style scoped>
.shop{
  width: 100%;
  padding: 0 10px 20px;
  border-bottom: 4px solid #f6f6f6;
  margin-bottom: 5px;
}
.shop_title{
  margin-top: 20px;
  line-height: 40px;
}
.shop_title img{
  width: 40px;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid #e6e6e6;
}
.shop_title span{
  font-size: 16px;
  padding-left: 10px;
}
.shop_info{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  text-align: center;
}
.left{
  display: flex;
  width: 49%;
}
.left_item{
  flex: 1;
  line-height: 24px;
  vertical-align: middle;
  font-size: 18px;
}
.left_item_title{
  font-size: 13px;
}
.center{
  height: 50px;
  width: 2px;
  background-color: #e6e6e6;
}
.right{
  width: 49%;
}
.right table{
  margin: 0 auto;
  font-size: 13px;
  border-spacing:5px 10px;
}
.right table td{
  height: auto;
}
.right_score{
  padding: 0 10px;
  text-align: left;
}
.right_score{color: green}
.right_score.on{color: red}
.right_better{
  background-color: green;
  color: #FFF;
}
.right_better.on{
  background-color: red;
}
.shop_enter{
  width: 40%;
  margin: 0 auto;
  display: block;
  height: 30px;
  border-radius: 8px;
  background-color: #eee;
  color: var(--color-text);
  font-size: 14px;
  border: 0;
}
</style>