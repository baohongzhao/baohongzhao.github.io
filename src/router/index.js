import Vue from "vue";
import Router from "vue-router";
import home from "@/views/home/Home";
import category from "@/views/category/Category";
import cart from "@/views/cart/Cart";
import profile from "@/views/profile/Profile";
import detail from "@/views/detail/Detail";

Vue.use(Router);

const routes = [
  {
    path : '',
    redirect : '/home'
  },
  {
    path: '/home',
    component : home,
    meta : {
      title : '首页',
      footShow: true,
    }
  },
  {
    path : '/category',
    component: category,
    meta : {
      title: '分类',
      footShow: true,
    }
  },
  {
    path: '/cart',
    component: cart,
    meta: {
      title: '购物车',
      footShow: true,
    }
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      title: '我的',
      footShow: true,
    }
  },
  {
    path: '/detail',
    component: detail,
    meta: {
      title: '商品详情',
      footShow: false,
    }
  }
]

const router = new Router({
  routes,
  // mode : 'history',
  // linkActiveClass : 'active',
  /*scrollBehavior (to,from,savePosition) {
    return {x: 0, y: 0};
  }*/
})

router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next()
});

export default router;