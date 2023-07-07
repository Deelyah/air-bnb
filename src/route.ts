import { createRouter, createWebHistory } from "vue-router";
import ShowcaseCard from "./components/cards/ShowcaseCard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: "/", component: ShowcaseCard }],
});

export default router;
