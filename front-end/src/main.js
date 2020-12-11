import Vue from "vue";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
let data = {
  commonFoodList: [],
  brandedFoodList: [],
  searchfulText: '',
  dailyFoodBasket:[],
  searchCalories: Number,
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
