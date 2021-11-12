<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="mb-6 cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>

      <div>
        <h1 class="mb-4 font-semibold text-6xl">
          Events detail
        </h1>
      </div>

      <div class="flex">
        <div class="flex flex-col text-right border-r pr-2">
          <div class="text-lg underline italic">
            Event name:
          </div>
          <div class="text-lg underline italic">
            Team:
          </div>
          <div class="text-lg underline italic">
            Attendees:
          </div>
          <div class="text-lg underline italic">
            Sport:
          </div>
          <div class="text-lg underline italic">
            Place:
          </div>
          <div class="text-lg underline italic">
            Date and time:
          </div>
        </div>
        <div class="flex flex-col ml-5 ">
          <div class="text-lg font-semibold">
            {{ this.event.name }}
          </div>
          <div class="font-semibold text-lg">
            {{ this.teamName()}}
          </div>
          <div class="flex flex-wrap">
            <div class="mr-2 text-lg font-semibold" v-bind:key=username v-for="username in this.attendeeNames()">
              {{ username }},
            </div>
            &nbsp;
          </div>
          <div class="font-semibold text-lg">
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
                class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black
                      hover:bg-orange" v-if="this.userJoined"
                @click="leave"
        >
          LEAVE
        </button>
        <button type="button"
                class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black
                      hover:bg-orange" v-else
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
  props: {
    eventId: String,
  },
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
    },

    attendeeNames(){
       return this.event.attendees.map(a => a.username);
    },

    teamName(){
      return Team.query().whereId(this.event.team_id).first().name;
    }
  },

  created(){
    this.loadEvent();
  }
}
</script>

<style scoped>

</style>