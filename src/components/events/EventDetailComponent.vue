<template>
  <article class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-col w-full max-w-3xl sm:flex-row justify-center">
      <div>
        <back-button></back-button>

        <div class="text-info">
          <p>
            <i class="far fa-clock"></i>
            {{ getDateTimeString() }}
          </p>

          <p>
            <i class="fas fa-map-marker-alt"></i>
            {{ this.event.place }}
          </p>

          <h1 class="text-subheading">
            {{ this.event.name }}
          </h1>
        </div>

        <!--        <div class="flex">-->
        <div class="flex flex-col">
          <p class="text-info">
            <b class="text-label"> Sport: </b>
            {{ this.event.sport }}
          </p>
          <p class="text-info" v-if="this.isPrivate()">
            <b class="text-label"> Team: </b>
            {{ this.teamName() }}
          </p>

          <div>
            <button type="button"
                    class="my-5 mx-auto px-10 py-4 text-white text-3xl rounded-xl border-black bg-brightred
                          hover:shadow-xl hover:text-xl hover-zoom"
                    v-if="this.userJoined"
                    @click="leave"
            >
              LEAVE
            </button>
            <button type="button"
                    class="my-5 mx-auto px-10 py-4 text-white text-3xl border-black bg-brightgreen
                          rounded-xl hover:shadow-xl hover:text-xl hover-zoom"
                    v-else
                    @click="join"
            >
              JOIN
            </button>
          </div>
        </div>
        <!--        </div>-->
      </div>

      <ul class="flex flex-wrap flex-col text-info sm:ml-10 sm:border-l-2 sm:pl-10">
        <b class="text-label">Joined:&nbsp;</b>
        <li class="mr-2" v-bind:key=username v-for="username in this.attendeeNames()">
          {{ username }}
        </li>
        &nbsp;
      </ul>
    </div>
  </article>
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

    isPrivate(){
      return this.event.team_id !== null;
    }
  },

  created() {
    this.eventId = this.$route.query.eventId;
    this.loadEvent();
    console.log(this.event.team_id)
  }
}
</script>

