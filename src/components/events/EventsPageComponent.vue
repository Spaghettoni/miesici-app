<template>
  <article class="w-full flex justify-center">
    <div class="px-4 flex flex-col w-full max-w-3xl">
      <div class="mt-6 flex items-start flex-col sm:justify-between sm:flex-row sm:items-center">
        <h1 class="mb-4 mr-8 text-heading">
          Events
        </h1>
        <div v-if="this.isUserLoggedIn">
          <input id="showPublic" type="checkbox" v-model="this.input.showPublic" />
          <label class="mx-2 text-label" for="showPublic">Public</label>
          <input class="ml-2" id="showPrivate" type="checkbox" v-model="this.input.showPrivate" checked/>
          <label class="mx-2 text-label" for="showPrivate">Private</label>
        </div>
        <router-link
            to="/create-event"
            class="px-4 py-2 flex items-center border-black bg-orange
                   rounded-xl cursor-pointer hover:shadow-xl
                   hover-zoom">
          <i class="fas fa-plus-circle text-2xl"></i>
          <div class="ml-2 text-create-button">
            Create new event
          </div>
        </router-link>
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
        showPrivate: true,
        showPublic: false
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

.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

.container:hover input ~ .checkmark {
  background-color: #ccc;
}

.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

</style>