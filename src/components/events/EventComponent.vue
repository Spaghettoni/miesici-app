<template>
  <div class="p-0.5">
    <div class="flex">
<!--         v-bind:class="this.userJoined && 'bg-green border-2 border-green'"-->

      <div class="flex flex-col ml-2 relative">
        <div class="font-semibold text-lg italic">
          <i class="far fa-clock"></i>
          {{ getDateTimeString()}}
        </div>
        <div class="font-semibold text-lg italic">
          <i class="fas fa-map-marker-alt"></i>
          {{ this.place }}
        </div>

        <h2 class="text-2xl font-bold">
          {{ this.name }}
        </h2>

        <div class="font-semibold text-lg hidden sm:block">
          <span class="font-bold"> Sport: </span>
          {{ this.sport }}
        </div>
        <div class="font-semibold text-lg hidden sm:block">
          <span class="font-bold"> Team: </span>
          {{ this.team }}
        </div>
        <div class="font-semibold text-lg hidden sm:block">
          <span class="font-bold"> Joined: </span>
          {{ this.attendees.length }}
        </div>
      </div>

      <p class=" ml-auto mt-2 mr-2 text-xl sm:text-2xl"
         v-if="this.userJoined"
      >
        <i class="far fa-check-square"></i>
        <span class="hidden sm:inline ml-3">JOINED </span>
<!--        ✓-->
      </p>
    </div>
  </div>
</template>

<script>
import EventsController from '../../controllers/EventsController';

export default {
  name: "EventComponent",
  props: {
    eventId: String,
    name: String,
    team: String,
    sport: String,
    place: String,
    datetime: String,
    private: Boolean,
    attendees: Array
  },

  computed: {
    userJoined() {
      return EventsController.didUserJoinEvent(this.eventId);
    }
  },

  methods: {
    getDateTimeString() {
      let date = new Date(this.datetime);
      const timeOptions = { hour: '2-digit', minute: '2-digit' };
      const weekDayOptions = {weekday: 'long'};
      const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};

      let timeString = date.toLocaleTimeString("en-UK",timeOptions);
      let weekDayString = date.toLocaleDateString("en-UK", weekDayOptions);
      let dateString = date.toLocaleDateString("en-UK", dateOptions);
      return timeString + ', ' + dateString + ' (' + weekDayString + ')';
    },
  }
}
</script>

<style scoped>

</style>