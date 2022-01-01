<template>
  <div class="flex flex-col">
    <div class="mb-2" @click="this.openclose">
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

        <i v-if="this.userJoined && !this.open" class="fas fa-chevron-down ml-auto mt-8"></i>
        <i v-else-if="!this.userJoined && !this.open" class="fas fa-chevron-down ml-auto mt-14"></i>
        <i v-else-if="!this.userJoined && this.open" class="fas fa-chevron-up ml-auto mt-14"></i>
        <i v-else-if="this.userJoined && this.open" class="fas fa-chevron-up ml-auto mt-8"></i>
      </div>

  </div>
    </div>

    <div v-if="this.open">
      <event-info :eventId=this.eventId>
      </event-info>
    </div>

    <div class="flex w-full">
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


  </div>
</template>

<script>
import EventsController from '../../controllers/EventsController';
import DateController from "@/controllers/DateController";
import store from "../../store";


export default {
  name: "EventComponent2",
  data() {
    return {
      open: false
    }
  },
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
      EventsController.joinEvent(this.eventId);
      this.loadEvent();
    },

    leave() {
      EventsController.leaveEvent(this.eventId);
      this.loadEvent();
    },

    openclose() {
      this.open = !this.open;
    },

    async updateTeamPath(target) {
      //await router.push(target);
      store.commit('setCurrentPath',target);
    },
  },

  created(){
    console.log("creted team id " + this.teamId)
    console.log("is private "+ this.isPrivate())
  }
}
</script>

<style scoped>

</style>