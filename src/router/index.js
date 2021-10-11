import { createWebHistory, createRouter } from "vue-router";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import HomeComponent from "@/components/HomeComponent";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
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