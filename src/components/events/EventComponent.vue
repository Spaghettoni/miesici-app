<template>
  <div class="p-2">
    <div class="flex">
<!--         v-bind:class="this.userJoined && 'bg-green border-2 border-green'"-->

      <div class="flex flex-col ml-5 relative">
        <h2 class="text-2xl font-bold">
          {{ this.name }}
        </h2>
        <div class="font-semibold text-lg">
          <span class="font-bold"> Team: </span>
          {{ this.team }}
        </div>
        <div class="font-semibold text-lg">
          <span class="font-bold"> Joined: </span>
          {{ this.attendees.length }}
        </div>
        <div class="font-semibold text-lg">
          <span class="font-bold"> Sport: </span>
          {{ this.sport }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.place }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.datetime }}
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
  }
}
</script>

<style scoped>

</style>