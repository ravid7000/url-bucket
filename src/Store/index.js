import Vue from "vue";
import Vuex from "vuex";
import buckets from "./bucket";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    buckets,
    currentRoute: "main",
    currentBucket: null
  },
  mutations
});
