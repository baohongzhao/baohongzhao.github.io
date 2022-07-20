<template>
  <div class="recommend">
    <div class="recommend_item" v-for="v in recommend">
      <a :href="v.link">
        <img :src="v.image" alt="">
        <p>{{v.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array,
      default () {
        return [];
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  width: 100%;
  display: flex;
  padding-bottom: 15px;
  border-bottom: 8px solid #eee;
}
.recommend_item{
  flex: 1;
  text-align: center;
}
.recommend_item img{
  width: 80%;
  margin-top: 10px;
  margin-bottom: 5px;
}
.recommend_item p{
  font-size: 14px;
  color: #333;
}
</style>