import Vue from "vue";
import Vuex from "vuex";
import buckets from "./bucket";
import mutations from "./mutations";
import DB from "./db";
import { syncDataToDatabase } from "./plugin";
import getters from "./getters";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    buckets,
    currentRoute: "main",
    currentBucket: null
  },
  mutations,
  getters,
  actions,
  plugins: [syncDataToDatabase]
});

const dataBase = new DB();

store.commit("initBucketData", dataBase.select("buckets"));

export default store;
