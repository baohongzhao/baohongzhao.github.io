<template>
  <div class="cart_bottom_bar">
    <div class="check_all">
      <label for="all" @click="checkedAll"><img src="~assets/img/cart/check.png" v-show="this.checkedLength" alt=""></label>
      <input type="checkbox" class="checkInput" id="all" value="">
      <span>全选</span>
    </div>
    <div class="total">合计 : {{totalPrice | price}}</div>
    <div class="buy">去结算({{totalNum}})</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
// import cartList from "@/views/cart/childComponents/CartList";

export default {
  name: "CartBottomBar",
  data () {
    return {
      //cartList: this.$store.getters.cartList,
    }
  },
  props: {
  },
  created () {
  },
  methods: {
    checkedAll () {
      let isAll = this.checkedLength
      this.cartList.map(item => {
        item.checked = !isAll;
      });
    },
  },
  computed: {
    ...mapGetters(['cartList',"checkedLength"]),
    totalPrice () {
      return this.cartList.filter(item => {
        return item.checked;
      }).reduce((prev, next) => {
        return prev + next.price * next.num;
      },0)
    },
    totalNum () {
      return this.cartList.filter(item => {
        return item.checked;
      }).length
    },
  },
  filters: {
    price (val) {
      return '￥' + val.toFixed(2);
    }
  }
}
</script>

<style scoped>
.cart_bottom_bar{
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 49px;
  background-color: #eee;
  height: 40px;
  justify-content: space-between;
}
.check_all label{
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: var(--color-tint);
  border-radius: 50%;
  margin: 0 5px;
  vertical-align: middle;
}
.check_all label img{
  display: block;
}
.checkInput{
  display: none;
}
.check_all{
  flex-shrink: 0;
  height: 40px;
  line-height: 40px;
  margin-left: 5px;
  margin-right: 10px;
}
.check_all span{
  font-size: 14px;
  color: #888;
}
.buy{
  background-color: orangered;
  width: 100px;
  flex-shrink: 0;
  height: 40px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
}
.total{
  width: 100%;
  line-height: 40px;
}
</style>