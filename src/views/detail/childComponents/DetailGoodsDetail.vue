<template>
  <div class="info">
    <img :src="v" alt="" v-for="v in goodsDetail">
  </div>
</template>

<script>
export default {
  name: "DetailGoodsDetail",
  props: {
    goodsDetail: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      imgNum: 0,
      imgLength: 0,
    }
  },
  methods: {
    /*imgLoad() {
      if (++this.imgNum === this.imgLength) {
        this.$emit('imgLoad');
      }
    }*/
  },
  watch: {
    goodsDetail (info) {
      this.imgLength = info.length;
    }
  }
}
</script>

<style scoped>
.info img{
  width: 100%;
}
.info{
  padding-bottom: 20px;
  border-bottom: 4px solid #f6f6f6;
}
</style>