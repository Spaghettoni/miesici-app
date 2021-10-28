import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/HomeComponent";
import LoginComponent from "@/components/LoginComponent";
import RegistrationComponent from "@/components/RegistrationComponent";
import ProfileComponent from "../components/ProfileComponent";
import TeamsComponent from "../components/TeamsPageComponent";
import EventsComponent from "../components/EventsComponent";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeComponent,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileComponent,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsComponent,
  },
  {
    path: "/events",
    name: "Events",
    component: EventsComponent,
  },
  {
    path: "/login",
    name: "LoginComponent",
    component: LoginComponent,
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