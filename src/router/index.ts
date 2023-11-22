import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/list-user",
      name: "list-user",
      component: () => import("@/views/ListUser.vue"),
    },
    {
      path: "/edit-user/:id",
      name: "edit-user",
      component: HomeView,
    },
  ],
});

export default router;
