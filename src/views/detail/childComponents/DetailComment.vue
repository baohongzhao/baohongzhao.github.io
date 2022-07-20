<template>
  <div class="comment">
    <div class="comment_item" v-for="v in comment">
      <p class="title">用户评价<a href="javascript:void(0)">更多</a></p>
      <div class="user">
        <img :src="v.user.avatar" alt="">
        <span>{{v.user.uname}}</span>
      </div>
      <p class="content">{{v.content}}</p>
      <p class="info">{{v.created | getTime}} {{v.style}}</p>
      <div class="user_img" v-if="v.images">
        <img :src="val" alt="" v-for="val in v.images">
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "@/common/utils";

export default {
  name: "DetailComment",
  props: {
    comment: {
      type: Array,
      default () {
        return []
      }
    }
  },
  filters: {
    getTime (time) {
      return formatDate(time, 'yyyy-mm-dd');
    }
  }
}
</script>

<style scoped>
.comment{
  padding: 0 10px 20px;
  border-bottom: 4px solid #f6f6f6;
}
.title{
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  text-align: left;
  border-bottom: 1px solid #e6e6e6;
}
.title a{
  float: right;
  line-height: 50px;
  font-size: 14px;
  padding-right: 10px;
}
.user{
  height: 60px;
  line-height: 60px;
}
.user img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
}
.user span{
  font-size: 16px;
  margin-left: 10px;
}
.content{
  font-size: 14px;
  padding-bottom: 10px;
  line-height: 20px;
  color: #777;
}
.info{
  font-size: 12px;
  color: #a1a1a1;
  padding-bottom: 10px;
}
.user_img img{
  width: 70px;
  height: 70px;
}
</style>