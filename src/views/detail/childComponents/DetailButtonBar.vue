<template>
  <div class="button_bar">
    <div class="left">
      <div class="item" v-for="v in leftBtn">
        <i></i>
        <p>{{v}}</p>
      </div>
    </div>
    <div class="right">
      <div class="right_btn cart" @click="addToCart">加入购物车</div>
      <div class="right_btn buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailButtonBar",
  data () {
    return {
      leftBtn: ['客服', '店铺', '收藏'],
    }
  },
  methods: {
    addToCart () {
      this.$emit('addToCart');
    }
  }
}
</script>

<style scoped>
.button_bar{
  width: 100%;
  height: 58px;
  position: fixed;
  bottom: 0;
  background-color: #FFF;
}
.left{
  display: flex;
  width: 50%;
}
.left .item{
  flex: 1;
}
.item:first-child i{
  background: url("~assets/img/detail/detail_button.png") 0 -56px/100%;
}
.item:nth-child(2) i{
  background: url("~assets/img/detail/detail_button.png") 0 -106px/100%;
}
.item:nth-child(3) i{
  background: url("~assets/img/detail/detail_button.png") 0 3px/100%;
}
.item i{
  display: block;
  width: 24px;
  height: 24px;
  margin: 5px auto;
}
.item p{
  text-align: center;
  font-size: 14px;
}
.right{
  display: flex;
  width: 50%;
}
.right div{
  flex: 1;
  text-align: center;
  line-height: 58px;
  font-size: 15px;
}
.cart{
  background-color: #ffe817;
  color: #333;
}
.buy{
  background-color: var(--color-tint);
  color: #fff;
}
</style>