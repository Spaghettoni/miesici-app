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

      <div class="mt-1">
        <span class="mx-2 text-label">Accordion</span>
        <label class="switch">
          <input type="checkbox" v-model="this.input.showDetail">
          <span class="slider round"></span>
        </label>
        <span class="mx-2 text-label">Detail</span>

        <!--        <input class="ml-2" id="showDetail" type="radio" name="display-method" v-model="this.input.showDetail" checked/>-->
<!--        <label class="mx-2 text-label" for="showDetail">Detail</label>-->
<!--        |-->
<!--        <input class="ml-2" id="showAccordion" type="radio" name="display-method"/>-->
<!--        <label class="mx-2 text-label" for="showAccordion">Accordion</label>-->
      </div>

      <div class="flex flex-col" v-if="this.input.showDetail">
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
      <div class="flex flex-col" v-else>
        <article class="mt-6 cursor-pointer hover:shadow-xl hover:bg-orange rounded-xl bg-gray-light
                            transition duration-100 transform hover:scale-105"
                 v-bind:key=event v-for="event in this.events"
        >
          <event-component2
              @openForm="openForm($event)"
              :teamId=event.team_id
              :eventId=event.id
              :name=event.name
              :team=teamName(event)
              :attendees=attendeeNames(event)
              :place=event.place
              :datetime=event.datetime
              :sport=event.sport
          ></event-component2>
        </article>
      </div>
    </div>
    <join-event-form-component
        @closeForm="closeForm"
        :class="[this.showForm ? 'block' : 'hidden']"
        :eventId=this.eventId
    ></join-event-form-component>
  </article>
</template>

<script>
import router from "../../router";
import EventsController from "../../controllers/EventsController";
import { Team } from "../../store/Models";
import LoginController from '../../controllers/LoginController';
import store from "../../store";

export default {
  name: "EventsComponent",
  data() {
    return {
      input: {
        showPrivate: this.isUserLoggedIn(),
        showPublic: this.isUserLoggedIn() === false,
        showDetail: true,
      },
      showForm: false,
      eventId: '',
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

    async updateActive(target) {
      store.commit('setCurrentPath',target);
    },

    openForm(eventId) {
      console.log('toggle form');
      this.eventId = eventId;
      this.showForm = true;
    },

    closeForm() {
      this.showForm = false;
    }
  },
  mounted() {
    //this.events = EventsController.getUsersEvents();
    this.updateActive('/events');
  }
}
</script>

<style scoped>
.heading {
  /*font-size: 2.7rem;*/
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>