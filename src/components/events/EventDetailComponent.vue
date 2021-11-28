<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="mb-6 cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>

      <div>
        <h1 class="ml-5 mb-4 font-semibold text-6xl">
          {{ this.event.name }}
        </h1>
      </div>

      <div class="flex">
        <div class="flex flex-col ml-5 ">
          <div class="font-semibold text-lg">
            <span class="font-bold"> Team: </span>
            {{ this.teamName()}}
          </div>
          <div class="flex flex-wrap text-lg font-semibold">
            <span class="font-bold">Joined:&nbsp;</span>
            <div class="mr-2" v-bind:key=username v-for="username in this.attendeeNames()">
              {{ username }},
            </div>
            &nbsp;
          </div>
          <div class="font-semibold text-lg">
            <span class="font-bold"> Sport: </span>
            {{ this.event.sport }}
          </div>
          <div class="font-semibold text-lg">
            {{ this.event.place }}
          </div>
          <div class="font-semibold text-lg">
            {{ this.event.datetime }}
          </div>
        </div>
      </div>

      <div>

        <button type="button"
                class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black bg-orange
                       hover:bg-strongOrange rounded-xl" v-if="this.userJoined"
                @click="leave"
        >
          LEAVE
        </button>
        <button type="button"
                class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black bg-orange
                       hover:bg-strongOrange rounded-xl" v-else
                @click="join"
        >
          JOIN
        </button>

      </div>

    </div>
  </div>
</template>

<script>
import router from "../../router";
import EventsController from "@/controllers/EventsController";
import {Event, Team} from "../../store/Models";

export default {
  name: "EventDetailComponent",

  data() {
    return {
      event: null
    }
  },

  computed: {
    userJoined() {
      return EventsController.didUserJoinEvent(this.eventId);
    }
  },

  methods: {
    goBack() {
      router.back();
    },

    join() {
      EventsController.joinEvent(this.eventId);
      this.loadEvent();
    },

    leave() {
      EventsController.leaveEvent(this.eventId);
      this.loadEvent();
    },

    loadEvent(){
      this.event = Event.query().whereId(this.eventId).with('attendees').first();
      console.log("this event", this.event);
      if(this.event === null){
        this.event = {
            id: "",
            name: "",
            place: "",
            sport: "",
            team_id: "",
            datetime: "",
            attendees: []
        }
        router.replace("/NotFound");
      }
    },

    attendeeNames(){
       return this.event.attendees.map(a => a.username);
    },

    teamName(){
      const team = Team.query().whereId(this.event.team_id).first();
      return (team === null) ? "" : team.name;
    }
  },

  created(){
    this.eventId = this.$route.query.eventId;
    this.loadEvent();
  }
}
</script>

<style scoped>

</style>