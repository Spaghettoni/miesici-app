<template>
  <div class="flex flex-col">
    <router-link :to="{name: 'EventDetail', query: {eventId: this.eventId}}">
  <div class="p-0.5 flex">
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
<!--          <b class="text-label"> Sport: </b>-->
          <i class="fas fa-mouse" v-if="this.sport === 'E-sport'"></i>
          <i class="far fa-futbol" v-else-if="this.sport === 'Football'"></i>
          <i class="fas fa-dumbbell" v-else-if="this.sport === 'Gym'"></i>
          <i class="fas fa-hockey-puck" v-else-if="this.sport === 'Ice hockey'"></i>
          <i class="fas fa-meteor" v-else-if="this.sport === 'Javelin throw'"></i>
          <i class="fas fa-hockey-puck" v-else-if="this.sport === 'Street hockey'"></i>
          <i class="fas fa-swimmer" v-else-if="this.sport === 'Swimming'"></i>
          <i class="fas fa-table-tennis" v-else-if="this.sport === 'Tennis'"></i>
          <i class="fas fa-volleyball-ball" v-else-if="this.sport === 'Volleyball'"></i>
          <i class="fas fa-basketball-ball" v-else-if="this.sport === 'Basketball'"></i>
          <i class="fas fa-bullseye" v-else-if="this.sport === 'Curling'"></i>
          <span v-else-if="this.sport === 'Petang'">
          <i class="fas fa-circle"></i>
          <i class="far fa-circle text-xs"></i>
          </span>
          <i class="fas fa-running" v-else></i>

          {{ this.sport }}
        </p>
        <p class="text-info" v-if="this.isPrivate()">
          <!--          <b class="text-label"> Team: </b>-->
          <router-link class="underline hover:text-white"
                       :to="{name: 'TeamDetail', query: {teamId: this.teamId}}"
                       @click="updateTeamPath('/teams')">
            <i class="fas fa-users"></i>
            {{ this.team }}
          </router-link>
        </p>
<!--        <p class="text-info">-->
<!--          <b class="text-label"> Joined: </b>-->
<!--          {{ this.attendees.length }}-->
<!--        </p>-->
      </div>

      <div class=" ml-auto mt-2 mr-2 text-xl sm:text-2xl flex flex-col z-10">
        <div v-if="this.userJoined">
          <i class="far fa-check-square"></i>
          <span class="hidden sm:inline ml-3">JOINED </span>
        </div>
        <i v-if="this.isPrivate()" class="fas fa-user-lock ml-auto"></i>

      </div>

  </div>
    </router-link>

    <div class="flex w-full mt-2">
      <button type="button"
              class="w-full py-1 text-white text-2xl rounded-b-xl border-black bg-brightred
                              hover:shadow-xl hover:text-xl z-10"
              v-if="this.userJoined"
              @click="leave"
      >
        LEAVE
      </button>
      <button type="button"
              class="w-full py-1 text-white text-2xl rounded-b-xl border-black bg-brightgreen
                              hover:shadow-xl hover:text-xl z-10"
              v-else
              @click="join"
      >
        JOIN
      </button>
    </div>

<!--    <div class="sm:block hidden absolute bottom-0 right-2">-->
<!--      <button type="button"-->
<!--              class="my-4 px-10 py-2 text-white text-2xl rounded-xl border-black bg-brightred-->
<!--                              hover:shadow-xl hover:text-xl hover-zoom z-10"-->
<!--              v-if="this.userJoined"-->
<!--              @click="leave"-->
<!--      >-->
<!--        LEAVE-->
<!--      </button>-->
<!--      <button type="button"-->
<!--              class="my-4 px-10 py-2 text-white text-2xl rounded-xl border-black bg-brightgreen-->
<!--                              hover:shadow-xl hover:text-xl hover-zoom z-10"-->
<!--              v-else-->
<!--              @click="join"-->
<!--      >-->
<!--        JOIN-->
<!--      </button>-->
<!--    </div>-->

  </div>
</template>

<script>
import EventsController from '../../controllers/EventsController';
import DateController from "@/controllers/DateController";
import store from "../../store";
import LoginController from "../../controllers/LoginController";
import {Event} from "../../store/Models";
import router from "../../router";


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
    },

    join() {
      const currentUser = LoginController.getCurrentUser();
      if (currentUser !== null) {
        EventsController.joinEvent(this.eventId);
        this.loadEvent();
      } else {
        this.$emit('openForm', this.eventId);
      }
    },

    leave() {
      EventsController.leaveEvent(this.eventId);
      this.loadEvent();
    },

    async updateTeamPath(target) {
      //await router.push(target);
      store.commit('setCurrentPath',target);
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
  },

  created(){
    // console.log("creted team id " + this.teamId)
    // console.log("is private "+ this.isPrivate())
  }
}
</script>

<style scoped>

</style>