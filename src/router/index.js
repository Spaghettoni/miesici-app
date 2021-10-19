import { createWebHistory, createRouter } from "vue-router";
import NotFoundComponent from "@/components/NotFoundComponent.vue";
import HomeComponent from "@/components/HomeComponent";
import LoginComponent from "@/components/LoginComponent";
import UpcomingEventsComponent from "@/components/UpcomingEventsComponent";
import RegistrationComponent from "@/components/RegistrationComponent";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/not-found",
    name: "NotFoundComponent",
    component: NotFoundComponent,
  },
  {
    path: "/login",
    name: "LoginComponent",
    component: LoginComponent,
  },
  {
    path: "/events",
    name: "UpcomingEventsComponent",
    component: UpcomingEventsComponent,
  },
  {
    path: "/register",
    name: "Registration",
    component: RegistrationComponent,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;