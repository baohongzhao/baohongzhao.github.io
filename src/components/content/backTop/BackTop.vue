<template>
  <div class="back_top">
    <img src="~assets/img/common/backtop.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop",
}
</script>

<style scoped>
.back_top{
  background-color: #FFF;
  position: fixed;
  bottom: 70px;
  right: 10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
}
.back_top img{
  width: 20px;
  display: inline-block;
  vertical-align: middle;
}
</style>