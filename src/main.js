import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  inheritAttrs: false,
  render: h => h(App)
}).$mount("#app");
