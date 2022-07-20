import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from "@/store"
import toast from "@/components/common/toast";
import fastclick from 'fastclick';//引入fastclick
import lazyLoad from "vue-lazyload";//引入vue-lazyload

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();//配置事件总线

Vue.use(toast);

// fastclick.attach(document.body);//fastclick配置

Vue.use(lazyLoad, {
  loading: require('./assets/img/common/loading.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')//$mount等同于el
