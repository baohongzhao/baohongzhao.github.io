<template>
  <div id="cart">
    <nav-bar class="cart_nav_bar">
      <div slot="center">购物车 <span>({{cartNum}})</span></div>
    </nav-bar>
    <cart-list></cart-list>

    <cart-bottom-bar></cart-bottom-bar>
  </div>

</template>

<script>
import navBar from "@/components/common/navBar/NavBar";
import cartList from "@/views/cart/childComponents/CartList";
import cartBottomBar from "@/views/cart/childComponents/CartBottomBar";

export default {
  name: "Cart",
  data () {
    return {
      checkInfo: {},
    }
  },
  mounted() {
  },
  methods: {
  },
  computed: {
    cartNum () {
      return this.$store.state.cart.goods.length;
    }
  },
  components: {
    navBar,
    cartList,
    cartBottomBar,
  }
}
</script>

<style scoped>
.cart_nav_bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
