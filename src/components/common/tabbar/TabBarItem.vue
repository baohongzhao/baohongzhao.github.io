<template>
  <div class="tab_bar_item" @click="itemClick">
    <slot v-if="!isOn" name="tab_bar_item_img"/>
    <slot v-else name="tab_bar_item_img_on"/>
    <div :style="color" class="tab_bar_item_text"><slot name="tab_bar_item_text"/></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props : {
    path : String,
    activeColor : {
      type : String,
      default : 'tomato',
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed : {
    isOn () {
      return this.$route.path.includes(this.path);
    },
    color () {
      return this.isOn ? {color : this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
.tab_bar_item{flex: 1;text-align: center;}
.tab_bar_item img{width: 27px;display: block;margin: 1px auto;}
.tab_bar_item_text{line-height: 18px;font-size: 14px;color: #333;}
</style>