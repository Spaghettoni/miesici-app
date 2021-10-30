import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/HomeComponent";
import LoginComponent from "@/components/LoginComponent";
import RegistrationComponent from "@/components/RegistrationComponent";
import ProfileComponent from "../components/ProfileComponent";
import TeamsComponent from "../components/team/TeamsPageComponent";
import EventsComponent from "../components/events/EventsPageComponent";
import TeamDetailComponent from "../components/team/TeamDetailComponent";
import CreateTeamComponent from "../components/team/CreateTeamComponent";
import EventDetailComponent from "../components/events/EventDetailComponent";
import CreateEventComponent from "../components/events/CreateEventComponent";

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
    path: "/team-detail",
    name: "TeamDetail",
    props: true,
    component: TeamDetailComponent,
  },
  {
    path: "/create-team",
    name: "CreateTeam",
    component: CreateTeamComponent,
  },
  {
    path: "/events",
    name: "Events",
    component: EventsComponent,
  },
  {
    path: "/event-detail",
    name: "EventDetail",
    props: true,
    component: EventDetailComponent,
  },
  {
    path: "/create-event",
    name: "CreateEvent",
    component: CreateEventComponent,
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