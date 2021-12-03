<template>
  <div class="p-0.5">
    <div class="flex">
      <div class="flex flex-col ml-5 relative">
        <div class="text-info italic">
          <i class="far fa-clock"></i>
          {{
            getDateTimeString()
          }}
        </div>
        <div class="text-info italic">
          <i class="fas fa-map-marker-alt"></i>
          {{ this.place }}
        </div>

        <h2 class="text-subheading">
          {{ this.name }}
        </h2>
        <div class="text-info">
          <span class="text-label"> Sport: </span>
          {{ this.sport }}
        </div>
        <div class="text-info">
          <span class="text-label"> Team: </span>
          {{ this.team }}
        </div>
        <div class="text-info">
          <span class="text-label"> Joined: </span>
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
import DateController from "@/controllers/DateController";


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

      return DateController.getDateTimeString(this.datetime);

    },


  }
}
</script>

<style scoped>

</style>