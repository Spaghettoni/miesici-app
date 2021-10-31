<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>
      <div class="mt-6 flex justify-between items-center">
        <h1 class="mb-4 font-semibold text-6xl">
          My Upcoming Events
        </h1>
        <router-link
            to="/create-event"
            class="ml-14 flex border items-center hover:bg-orange cursor-pointer">
          <img alt="" :src="'/pictures/create.png'" width="50">
          <div class="font-semibold pr-4">
            Create new event
          </div>
        </router-link>
      </div>
      <div class="flex flex-col">
        <router-link class="mt-6 border cursor-pointer hover:shadow-xl hover:bg-orange"
                     v-bind:key=event v-for="event in this.events"
                     :to="{name: 'EventDetail',
                     params: {
                       name: event.name,
                       attendees: event.attendees,
                       place: event.place,
                       sport: event.sport,
                       datetime: event.datetime,
                       team: event.team}}">
          <event-component
              :name=event.name
              :team=event.team
              :attendees=event.attendees
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
    }
  },
  mounted() {
    this.events = EventsController.getEvents();
  }
}
</script>

<style scoped>

</style>