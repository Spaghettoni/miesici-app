<template>
  <article class="w-full flex justify-center">
    <div class="px-4 flex flex-col w-full max-w-3xl">
      <div class="mt-6 flex items-start flex-col sm:justify-between sm:flex-row sm:items-center">
        <h1 class="mb-4 mr-8 text-heading">
          Events
        </h1>
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
        <router-link class="mt-6 cursor-pointer hover:shadow-xl hover:bg-orange rounded-xl bg-gray-light
                            transition duration-100 transform hover:scale-105"
                     v-bind:key=event v-for="event in this.events"
                     :to="{name: 'EventDetail',
                     query: {
                       eventId: event.id,
                     }}">
          <event-component
              :eventId=event.id
              :name=event.name
              :team=teamName(event)
              :attendees=attendeeNames(event)
              :place=event.place
              :datetime=event.datetime
              :sport=event.sport
          ></event-component>
        </router-link>
      </div>
    </div>
  </article>
</template>

<script>
import router from "../../router";
import EventsController from "../../controllers/EventsController";
import { Team } from "../../store/Models";

export default {
  name: "EventsComponent",
  data() {
    return {
      events: null,
    }
  },
  methods: {
    goBack() {
      router.back()
    },

    teamName(event){
      return Team.query().whereId(event.team_id).first().name;
    },

    attendeeNames(event){
       return event.attendees.map(a => a.username);
    }
  },
  mounted() {
    this.events = EventsController.getUsersEvents();
  }
}
</script>

<style scoped>
.heading {
  /*font-size: 2.7rem;*/
}
</style>