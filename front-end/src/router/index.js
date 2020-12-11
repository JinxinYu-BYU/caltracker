import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import History from "../views/History.vue";
import How from "../views/How.vue";
import About from "../views/About.vue";
import Cart from "../views/Cart.vue";
import FavFood from "../views/FavFood.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/history",
    name: "History",
    component: History
  },
  {
    path: "/how",
    name: "How",
    component: How
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/favfood",
    name: "FavFood",
    component: FavFood
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
