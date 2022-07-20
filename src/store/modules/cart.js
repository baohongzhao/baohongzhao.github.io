import {goods} from "@/network/detail";

export default {
  state: {
    goods: [],
    goodsCheck: [],
  },
  mutations: {
    /*addToCart (state, payload) {
      /!*if (state.goods[payload.goods.iid]) {
        state.goods[payload.goods.iid].num += 1;
      } else {
        state.goods[payload.goods.iid] = payload.goods;
        state.goodsCheck.push(payload.goods.iid);
      }*!/
      let index = state.goods.findIndex(arr => {
        return arr.iid === payload.goods.iid;
      })
      if (index > -1) {
        state.goods[index].num += 1;
      } else {
        state.goods.push(payload.goods);
      }
    },*/
    addToCart(state, goods) {
      state.goods.push(goods)
    },
    incrementCount(state, index) {
      state.goods[index].count += 1
    }
  },
  getters: {
    cartLength(state) {
      return state.goods.length
    },
    cartList(state) {
      return state.goods
    },
    checkedLength (state, getter) {
      return state.goods.filter(arr => arr.checked).length === getter.cartLength && getter.cartLength !== 0;
    }
  },
  actions: {
    addToCart (context, payload) {
      return new Promise((resolve, reject) => {
        let index = context.state.goods.findIndex(arr => {
          return arr.iid === payload.iid;
        })
        if (index > -1) {
          context.commit('incrementCount', index);
          resolve('商品数量+1');
        } else {
          context.commit('addToCart', payload);
          resolve('商品加入购物车');
        }
      })
    },
  },
}