import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import WhatWeDoView from "../views/WhatWeDo/WhatWeDoView.vue";
const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/WhatWeDoView",
    name: "WhatWeDoView",
    component: WhatWeDoView,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
