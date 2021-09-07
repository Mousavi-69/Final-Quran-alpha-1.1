import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "ListSures",
    component: () => import("./pages/ListSures_page/ListSures_page.vue")

  },
  {
    path: "/Sure",
    name: "Sure",
    component: () => import("./pages/Sure_page/Sure_page.vue")
  },
  {
    path: "/Settings",
    name: "Settings",
    component: () => import("./pages/Settings_page/Settings_page.vue")
  },


];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;