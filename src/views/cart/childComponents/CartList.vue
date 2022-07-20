<template>
  <div class="cart_list">
    <ul class="cart_item" v-for="(v, index) in cartList">
      <li class="check">
        <div @click="checked(index)"><img src="~assets/img/cart/check.png" alt="" v-show="v.checked"></div>
      </li>
      <li class="goods_img"><img :src="v.img" alt="" style="width: 100%"></li>
      <li class="info">
        <p class="title">{{v.title}}</p>
        <p class="desc">{{v.desc}}</p>
        <p class="price">{{v.price | price}}<span class="num">x{{v.num}}</span></p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "CartList",
  data () {
    return {
      cartList: this.$store.getters.cartList,
    }
  },
  methods: {
    checked (index) {
      this.cartList[index].checked = !this.cartList[index].checked;
    }
  },
  created() {
  },
  filters: {
    price (val) {
      return '￥' + val;
    }
  },
}
</script>

<style scoped>
.cart_list{
  width: 100%;
}
.cart_item{
  list-style: none;
  width: 100%;
  display: flex;
  /*align-items: center;*/
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
.check{
  display: flex;
  align-items: center;
}
.check div{
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: var(--color-tint);
  border-radius: 50%;
  margin: 0 5px;
}
.goods_img{
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
  margin-right: 10px;
}
.goods_img img{
  width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.info{
  margin-right: 15px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.title{
  position: absolute;
  top: 0;
  font-size: 16px;
  color: #333;
}
.desc{
  font-size: 14px;
  position: absolute;
  top: 25px;
}
.price{
  width: 100%;
  position: absolute;
  bottom: 0;
  font-size: 15px;
  color: var(--color-high-text);
}
.num{
  color: var(--color-text);
  float: right;
}
.title,.desc{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>