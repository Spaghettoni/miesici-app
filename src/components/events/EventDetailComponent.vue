<template>
  <article class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-col w-full max-w-3xl sm:flex-row justify-center">
      <div>

        <div class="flex flex-row">

          <router-link
              class="mb-6 cursor-pointer font-semibold hover:text-white hover:bg-black px-5 py-3 border max-w-min rounded-xl flex items-center"
              to="/events"
              @click="updatePath('/events')"
          >
            <i class="fas fa-solid fa-arrow-left mr-2"></i> Events
          </router-link>

          <button v-if="this.isUserLoggedIn()" type="button"
                  class="ml-auto mr-2 mb-6 px-2 py-1 text-white text-1xl rounded-xl border-black bg-brightred
                         sm:hidden"
                  @click="deleteEvent"
          >
            <i class="fas fa-trash-alt"></i> DELETE EVENT
          </button>

          <button v-if="!this.isUserLoggedIn()" type="button"
                  title="Accessible to logged in users"
                  class="ml-auto mr-2 mb-6 px-2 py-1 text-1xl rounded-xl border-black bg-gray-light text-gray-darker
                         sm:hidden cursor-not-allowed"
          >
            <i class="fas fa-trash-alt"></i> DELETE EVENT
          </button>


        </div>

        <div class="text-info">
          <p>
            <i class="far fa-clock"></i>
            {{ getDateTimeString() }}
          </p>

          <p>
            <i class="fas fa-map-marker-alt"></i>
            {{ this.event.place }}
          </p>

          <h1 class="text-subheading">
            {{ this.event.name }}
          </h1>
        </div>

        <!--        <div class="flex">-->
        <div class="flex flex-col">
          <p class="text-info">
            <b class="text-label"> Sport: </b>
            {{ this.event.sport }}
          </p>
          <p class="text-info" v-if="this.isPrivate()">
            <b class="text-label"> Team: </b>
            <router-link class="underline hover:text-orange"
                         :to="{name: 'TeamDetail', query: {teamId: this.event.team_id}}"
                         @click="updateActive('/teams')">
              {{ this.teamName() }}
            </router-link>
          </p>

          <div>
            <button type="button"
                    class="my-5 mx-auto px-10 py-4 text-white text-3xl rounded-xl border-black bg-brightred
                          hover:shadow-xl hover:text-xl hover-zoom"
                    v-if="this.userJoined"
                    @click="leave"
            >
              LEAVE
            </button>
            <button type="button"
                    class="my-5 mx-auto px-10 py-4 text-white text-3xl border-black bg-brightgreen
                          rounded-xl hover:shadow-xl hover:text-xl hover-zoom"
                    v-else
                    @click="join"
            >
              JOIN
            </button>
          </div>
        </div>
        <!--        </div>-->
      </div>

      <div class="sm:ml-10 sm:border-l-2  sm:pl-10">
        <button v-if="this.isUserLoggedIn()" type="button"
                class="mb-10 mx-auto px-2 py-4 text-white text-1xl rounded-xl border-black bg-brightred
                          hover:shadow-xl hover:text-xl hover-zoom hidden sm:block"
                @click="deleteEvent"
        >
          <i class="fas fa-trash-alt"></i> DELETE EVENT
        </button>

        <button v-if="!this.isUserLoggedIn()" type="button"
                title="Accessible to logged in users"
                class="mb-10 mx-auto px-2 py-4 text-1xl rounded-xl border-black bg-gray-light text-gray-darker
                          hidden sm:block cursor-not-allowed"
        >
          <i class="fas fa-trash-alt"></i> DELETE EVENT
        </button>

        <ul class="flex flex-wrap flex-col text-info">
          <b class="text-label">Joined({{ this.event.attendees.length }}):&nbsp;</b>
          <li class="mr-2" v-bind:key=username v-for="username in this.attendeeNames()">
            {{ username }}
          </li>
          &nbsp;
        </ul>
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
  name: "EventDetailComponent",
  data() {
    return {
      event: null
    }
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

    async updateActive(target) {
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
      router.back()
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
    this.eventId = this.$route.query.eventId;
    this.loadEvent();
    console.log(this.event.team_id);
  },

  mounted() {
    this.updateActive('/events');
  }
}
</script>

