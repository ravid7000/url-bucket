import Vue from "vue";
import store from "./Store";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  store,
  inheritAttrs: false,
  render: h => h(App)
}).$mount("#app");
