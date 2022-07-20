import Vue from "vue";
import Vuex from "vuex";
import cart from "@/store/modules/cart";

Vue.use(Vuex);

const state = {}

const store = new Vuex.Store({
  state,
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    cart,
  },
})

export default store;
