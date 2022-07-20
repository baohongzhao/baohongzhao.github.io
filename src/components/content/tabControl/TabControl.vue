<template>
  <div class="tab_control">
    <a class="tab_control_item" :class="{active: index === currentIndex}" v-for="(v, index) in titles" @click="itemClick(index)">{{v}}</a>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default () {
        return [];
      }
    },
  },
  data () {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabclick', index);
    }
  },
}
</script>

<style scoped>
.tab_control{
  display: flex;
  padding: 10px 0;
  /*position: sticky;*/
  top: 44px;
  background-color: #fff;
  z-index: 9;
}
.tab_control_item{
  flex: 1;
  height: 24px;
  line-height: 24px;
  text-align: center;
  font-size: 14px;
}
.active:after{
  content: '';
  height: 3px;
  width: 30%;
  display: block;
  margin: 0 auto;
  background-color: var(--color-tint);
 }
.active{
  color: var(--color-high-text);
}
</style>