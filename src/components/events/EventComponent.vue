<template>
  <article class="p-0.5 flex">

      <div class="flex flex-col ml-5 relative">
        <time class="text-info italic">
          <i class="far fa-clock"></i>
          {{
            getDateTimeString()
          }}
        </time>
        <p class="text-info italic">
          <i class="fas fa-map-marker-alt"></i>
          {{ this.place }}
        </p>

        <h2 class="text-subheading">
          {{ this.name }}
        </h2>
        <p class="text-info">
          <b class="text-label"> Sport: </b>
          {{ this.sport }}
        </p>
        <p class="text-info" v-if="this.isPrivate()">
          <b class="text-label"> Team: </b>
          {{ this.team }}
        </p>
        <p class="text-info">
          <b class="text-label"> Joined: </b>
          {{ this.attendees.length }}
        </p>
      </div>

      <div class=" ml-auto mt-2 mr-2 text-xl sm:text-2xl flex flex-col">
        <div v-if="this.userJoined">
          <i class="far fa-check-square"></i>
          <span class="hidden sm:inline ml-3">JOINED </span>
        </div>
        <i v-if="this.isPrivate()" class="fas fa-user-lock ml-auto"></i>
      </div>
      

  </article>
</template>

<script>
import EventsController from '../../controllers/EventsController';
import DateController from "@/controllers/DateController";


export default {
  name: "EventComponent",
  props: {
    teamId: String,
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

    isPrivate(){
      return this.teamId !== null;
    }
  },

  created(){
    console.log("creted team id " + this.teamId)
    console.log("is private "+ this.isPrivate())
  }
}
</script>

<style scoped>

</style>