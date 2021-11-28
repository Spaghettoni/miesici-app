<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>
      <div class="mt-6 flex justify-between items-center flex-wrap">
        <h1 class="mb-4 mr-8 font-semibold text-6xl">
          My Upcoming <br/>Events
        </h1>
        <router-link
            to="/create-event"
            class="flex border items-center hover:bg-orange cursor-pointer">
          <img alt="" :src="'/pictures/create.png'" width="50">
          <div class="font-semibold pr-4">
            Create new event
          </div>
        </router-link>
      </div>
      <div class="flex flex-col">
        <router-link class="mt-6 cursor-pointer hover:shadow-xl hover:bg-orange rounded-xl bg-gray-light"
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
  </div>
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

</style>