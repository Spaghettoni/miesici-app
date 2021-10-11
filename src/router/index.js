import { createWebHistory, createRouter } from "vue-router";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import HomeComponent from "@/components/HomeComponent";
import LoginComponent from "@/components/LoginComponent";
import UpcomingEventsComponent from "@/components/UpcomingEventsComponent";

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
  {
    path: "/Login",
    name: "LoginComponent",
    component: LoginComponent,
  },
  {
    path: "/Events",
    name: "UpcomingEventsComponent",
    component: UpcomingEventsComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;