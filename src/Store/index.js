import Vue from "vue";
import Vuex from "vuex";
import buckets from "./bucket";
import mutations from "./mutations";
import DB from "./db";
import { BUCKETS_KEY } from "./contants";
import { isAllowedIncognitoAccess } from "./tabs";
import { syncDataToDatabase, syncBucketToDatabase } from "./plugin";
import getters from "./getters";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    buckets,
    currentRoute: "main",
    currentBucket: null,
    settings: {
      incognito: true
    }
  },
  mutations,
  getters,
  actions,
  plugins: [syncDataToDatabase, syncBucketToDatabase]
});

async function getData() {
  const dataBase = new DB();
  const data = await dataBase.select(BUCKETS_KEY);
  store.commit("initBucketData", data);
  const isIncognitoAccess = await isAllowedIncognitoAccess();
  store.commit("setIncognitoAccess", isIncognitoAccess);
}

getData();

export default store;
