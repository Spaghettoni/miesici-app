<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-col w-full max-w-3xl">
      <back-button></back-button>

      <div class="text-info">
          <div>
            <i class="far fa-clock"></i>
            {{ getDateTimeString() }}
          </div>

          <div>
            <i class="fas fa-map-marker-alt"></i>
            {{ this.event.place }}
          </div>

        <h1 class="text-subheading">
          {{ this.event.name }}
        </h1>
      </div>

      <div class="flex">
        <div class="flex flex-col">
          <div class="text-info">
            <span class="text-label"> Sport: </span>
            {{ this.event.sport }}
          </div>
          <div class="text-info">
            <span class="text-label"> Team: </span>
            {{ this.teamName()}}
          </div>
          <div class="flex flex-wrap text-info">
            <span class="text-label">Joined:&nbsp;</span>
            <div class="mr-2" v-bind:key=username v-for="username in this.attendeeNames()">
              {{ username }},
            </div>
            &nbsp;
          </div>
        </div>
      </div>

      <div>

        <button type="button"
                class="mt-12 mx-auto px-10 py-4 text-white text-3xl rounded-xl border-black bg-brightred
                       hover:shadow-xl hover:text-xl transition duration-100 transform hover:scale-105"
                v-if="this.userJoined"
                @click="leave"
        >
          LEAVE
        </button>
        <button type="button"
                class="mt-12 mx-auto px-10 py-4 text-white text-3xl border-black bg-brightgreen
                       rounded-xl hover:shadow-xl hover:text-xl transition duration-100 transform hover:scale-105"
                v-else
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
import DateController from "@/controllers/DateController";

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

    loadEvent() {
      this.event = Event.query().whereId(this.eventId).with('attendees').first();
      if (this.event === null) {
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

    attendeeNames() {
      return this.event.attendees.map(a => a.username);
    },

    teamName() {
      const team = Team.query().whereId(this.event.team_id).first();
      return (team === null) ? "" : team.name;
    },

    getDateTimeString() {

      return DateController.getDateTimeString(this.event.datetime);

    },


  },

  created() {
    this.eventId = this.$route.query.eventId;
    this.loadEvent();
  }
}
</script>

