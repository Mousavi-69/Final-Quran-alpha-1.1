import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "ListSures",
    component: () => import("@/pages/ListSures_page.vue")

  },
  {
    path: "/page/:number",
    name: "Page",
    component: () => import("@/pages/Sure_page.vue")
  },
  
];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;