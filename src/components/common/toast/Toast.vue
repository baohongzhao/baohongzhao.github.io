<template>
  <transition name="fade">
    <div class="toast" v-show="isShow">
      <p>{{message}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Toast",
  data () {
    return {
      message: '',
      isShow: false,
    }
  },
  methods: {
    /*show (message, duration=2000) {
      this.message = message;
      this.isShow = true;
      setTimeout (() => {
        this.message = '';
        this.isShow = false;
      },duration);
    }*/
  }
}
</script>

<style scoped>
.toast p{
  font-size: 16px;
  color: #FFF;
  padding: 8px 10px;
  background-color: rgba(0,0,0,0.7);
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>