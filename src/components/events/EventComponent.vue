<template>
  <div class="p-2">
    <div class="flex">
<!--         v-bind:class="this.userJoined && 'bg-green border-2 border-green'"-->

      <div class="flex flex-col text-right border-r pr-2"

      >
        <div class="text-lg italic">
          Event name:
        </div>
        <div class="text-lg italic">
          Team:
        </div>
        <div class="text-lg italic">
          Attendees:
        </div>
        <div class="text-lg italic">
          Sport:
        </div>
        <div class="text-lg italic">
          Place:
        </div>
        <div class="text-lg italic">
          Date and time:
        </div>
      </div>
      <div class="flex mr-auto flex-col ml-5 relative">
        <div class="text-lg font-semibold">
          {{ this.name }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.team }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.attendees.length }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.sport }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.place }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.datetime }}
        </div>
      </div>

      <p class=" ml-auto text-xl sm:text-2xl text-green"
         v-if="this.userJoined"
      >
        ✓
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