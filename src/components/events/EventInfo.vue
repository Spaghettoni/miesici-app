<template>
  <article class="w-full flex justify-center bg-gray-superlight">
    <div class="mt-10 px-4 py-1 flex flex-col w-full max-w-3xl sm:flex-row justify-center justify-evenly">
      <div>

        <div class="flex flex-row">

          <button v-if="this.isUserLoggedIn()" type="button"
                  class="mb-6 px-2 py-1 text-white text-1xl rounded-xl border-black bg-brightred
                         sm:hidden"
                  @click="deleteEvent"
          >
            <i class="fas fa-trash-alt"></i> Delete event
          </button>

          <button v-if="!this.isUserLoggedIn()" type="button"
                  class="mb-6 px-2 py-1 text-1xl rounded-xl border-black bg-gray-light text-gray-darker
                         sm:hidden cursor-not-allowed"
          >
            <i class="fas fa-trash-alt"></i> Delete event
          </button>


        </div>

        <ul class="flex flex-wrap flex-col text-info">
          <b class="text-label">Joined({{ this.event.attendees.length }}):&nbsp;</b>
          <li class="mr-2" v-bind:key=username v-for="username in this.attendeeNames()">
            {{ username }}
          </li>
          &nbsp;
        </ul>

      </div>

      <div class="sm:ml-10  sm:pl-10">
        <button v-if="this.isUserLoggedIn()" type="button"
                class="mb-10 mx-auto px-2 py-4 text-white text-1xl rounded-xl border-black bg-brightred
                          hover:shadow-xl hover:text-xl hover-zoom hidden sm:block"
                @click="deleteEvent"
        >
          <i class="fas fa-trash-alt"></i> Delete event
        </button>
        <button v-if="!this.isUserLoggedIn()" type="button"
                title="Accessible to logged in users"
                class="mb-10 mx-auto px-2 py-4 text-1xl rounded-xl border-black bg-gray-light text-gray-darker
                           hidden sm:block cursor-not-allowed"
        >
          <i class="fas fa-trash-alt"></i> Delete event
        </button>
      </div>

    </div>
  </article>
</template>

<script>
import router from "../../router";
import EventsController from "@/controllers/EventsController";
import {Event, Team} from "../../store/Models";
import DateController from "@/controllers/DateController";
import store from "../../store";
import LoginController from "../../controllers/LoginController";

export default {
  name: "EventInfo",
  data() {
    return {
      event: null
    }
  },

  props: {
    eventId: String
  },

  computed: {
    userJoined() {
      return EventsController.didUserJoinEvent(this.eventId);
    }
  },

  methods: {
    goBack() {
      router.back();
    },

    async updatePath(target) {
      await router.push(target);
      store.commit('setCurrentPath',target);
    },

    async updateTeamPath(target) {
      //await router.push(target);
      store.commit('setCurrentPath',target);
    },

    join() {
      EventsController.joinEvent(this.eventId);
      this.loadEvent();
    },

    leave() {
      EventsController.leaveEvent(this.eventId);
      this.loadEvent();
    },

    deleteEvent() {
      EventsController.deleteEvent(this.eventId)
    },

    loadEvent() {
      this.event = Event.query().whereId(this.eventId).with('attendees').first();
      if (this.event === null) {
        this.event = {
          id: "",
          name: "",
          place: "",
          sport: "",
          team_id: "",
          datetime: "",
          attendees: []
        }
        router.replace("/NotFound");
      }
    },

    attendeeNames() {
      return this.event.attendees.map(a => a.username);
    },

    teamName() {
      const team = Team.query().whereId(this.event.team_id).first();
      return (team === null) ? "" : team.name;
    },

    getDateTimeString() {
      return DateController.getDateTimeString(this.event.datetime);
    },

    isPrivate(){
      return this.event.team_id !== null;
    },

    isUserLoggedIn(){
      return LoginController.getLoggedUser() !== null;
    },
  },

  created() {
    this.loadEvent();
    console.log(this.event.team_id, this.attendeeNames())
  }
}
</script>

