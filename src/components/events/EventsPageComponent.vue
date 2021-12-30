<template>
  <article class="w-full flex justify-center">
    <div class="px-4 flex flex-col w-full max-w-3xl">
      <div class="mt-6 flex items-start flex-col sm:justify-between sm:flex-row sm:items-center">
        <h1 class="mb-4 mr-8 text-heading">
          Events
        </h1>
        <div v-if="this.isUserLoggedIn()">
          <input id="showPublic" type="checkbox" v-model="this.input.showPublic" />
          <label class="mx-2 text-label" for="showPublic">Public</label><br>
          <input id="showPrivate" type="checkbox" v-model="this.input.showPrivate" checked/>
          <label class="mx-2 text-label" for="showPrivate">Private</label>
        </div>
        <div v-if="!this.isUserLoggedIn()">
          <input id="showPublic2" type="checkbox" v-model="this.input.showPublic" checked/>
          <label class="mx-2 text-label" for="showPublic2">Public</label><br>
          <input disabled title="Accessible to logged in users" class="cursor-not-allowed" id="showPrivate2" type="checkbox" v-model="this.input.showPrivate" />
          <label title="Accessible to logged in users" class="mx-2 text-label text-gray-bitdarker" for="showPrivate2">Private</label>

        </div>
        <router-link v-if="this.isUserLoggedIn()"
            to="/create-event"
            class="px-4 py-2 flex items-center border-black bg-orange
                   rounded-xl cursor-pointer hover:shadow-xl
                   hover-zoom">
          <i class="fas fa-plus-circle text-2xl"></i>
          <div class="ml-2 text-create-button">
            Create new event
          </div>
        </router-link>
        <div v-if="!this.isUserLoggedIn()"
                    title="Accessible to logged in users"
                     class="px-4 py-2 flex items-center border-black bg-gray-light text-gray-darker
                   rounded-xl cursor-not-allowed">
          <i class="fas fa-plus-circle text-2xl"></i>
          <div class="ml-2 text-create-button">
            Create new event
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <article class="mt-6 cursor-pointer hover:shadow-xl hover:bg-orange rounded-xl bg-gray-light
                            transition duration-100 transform hover:scale-105"
                     v-bind:key=event v-for="event in this.events"
                     >
          <event-component
              :teamId=event.team_id
              :eventId=event.id
              :name=event.name
              :team=teamName(event)
              :attendees=attendeeNames(event)
              :place=event.place
              :datetime=event.datetime
              :sport=event.sport
          ></event-component>
        </article>
      </div>
    </div>
  </article>
</template>

<script>
import router from "../../router";
import EventsController from "../../controllers/EventsController";
import { Team } from "../../store/Models";
import LoginController from '../../controllers/LoginController';

export default {
  name: "EventsComponent",
  data() {
    return {
      input: {
        showPrivate: this.isUserLoggedIn(),
        showPublic: this.isUserLoggedIn() === false
      },
    }
  },

  computed: {
    events(){
      let events = [];
      if(this.input.showPrivate){
        events.push(...EventsController.getUsersEvents());
      }
      if(this.input.showPublic){
        events.push(...EventsController.getPublicEvents());
      }
      return events;
    }
  },

  methods: {
    goBack() {
      router.back()
    },

    teamName(event){
      const team = Team.query().whereId(event.team_id).first();
      if(! team){
        return '';
      }
      return team.name;
    },

    attendeeNames(event){
       return event.attendees.map(a => a.username);
    },

    isUserLoggedIn(){
      return LoginController.getLoggedUser() !== null;
    },
  },
  mounted() {
    //this.events = EventsController.getUsersEvents();
  }
}
</script>

<style scoped>
.heading {
  /*font-size: 2.7rem;*/
}
</style>