import { createRouter, createWebHistory } from "vue-router";
import BeachFront from "./pages/navigation-screens/BeachFront.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: BeachFront }],
});

export default router;
