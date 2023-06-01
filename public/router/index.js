import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OrdersView from "../views/OrdersView.vue";

const routes = [
  { path: "/", name: "HomeView", component: HomeView },
  { path: "/orders", name: "OrdersView", component: OrdersView },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
