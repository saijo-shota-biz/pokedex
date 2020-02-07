import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "pokemon-font/css/pokemon-font.css";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
