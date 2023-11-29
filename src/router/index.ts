import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ListUser from "@/views/ListUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ListUser,
    },
    {
      path: "/add-user",
      name: "add-user",
      component: HomeView,
    },
    {
      path: "/edit-user/:id",
      name: "edit-user",
      component: HomeView,
    },
  ],
});

export default router;
