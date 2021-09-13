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
  {
    path: "/Settings",
    name: "Settings",
    component: () => import("@/pages/Settings_page.vue")

  },
  {
    path: "/SidebarMenu",
    name: "SidebarMenu",
    component: () => import("@/components/SidebarMenu.vue")
  },
  // {
  //   path: "/Page",
  //   name: "Page",
  //   component: () => import("@/components/Page.vue")
  // },
  {
    path: "/Audio",
    name: "Audio",
    component: () => import("@/components/AudioPlayer.vue")
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/components/test.vue")
  },



];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;