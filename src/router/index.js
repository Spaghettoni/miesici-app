import { createWebHistory, createRouter } from "vue-router";
import Home from "@/App.vue";
import NotFoundComponent from "@/components/NotFoundComponent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/NotFound",
    name: "NotFoundComponent",
    component: NotFoundComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;