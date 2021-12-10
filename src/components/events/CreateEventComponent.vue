<template>
  <form class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-col w-full max-w-3xl">
      <back-button></back-button>

      <div class="flex justify-between items-center">
        <h1 class="mb-4 text-heading">
          Create new event
        </h1>
      </div>


      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="name">Event name</label>
        <input type="text" id="name" name="name"
               v-model="input.name"
               placeholder="miesenie"
               required
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
        <span class="text-brightred font-semibold" :class="[this.errors.name ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in event name!
        </span>
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="place">Place</label>
        <input type="text" id="place" name="place"
               v-model="input.place"
               placeholder="place"
               required
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
        <span class="text-brightred font-semibold" :class="[this.errors.place ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in place of event!
        </span>
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="sport">Sport</label>
        <input type="text" id="sport" name="sport"
               v-model="input.sport"
               placeholder="sport"
               required
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
        <span class="text-brightred font-semibold" :class="[this.errors.sport ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in sport!
        </span>
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="datetime">Date</label>
        <div class="border-2 border-black rounded w-full">
          <input type="datetime-local" id="datetime" name="datetime"
                 v-model="input.datetime"
                 placeholder="datetime"
                 required
                 class="px-4 py-2 text-3xl flex appearance-none bg-white rounded"
          />

        </div>
        <span class="text-brightred font-semibold" :class="[this.errors.datetime ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in event date!
        </span>
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl">Team</label>

        <select v-model="input.team" id="team" name="team" @change="saveTeamIdOnChange($event)"
                class="border-2 px-4 py-2 text-2xl rounded">
          <option v-for="option in this.teams" v-bind:value="option.id" v-bind:key="option">
            {{ option.name }}
          </option>
        </select>
        <span class="text-brightred font-semibold" :class="[this.errors.team ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please select team!
        </span>

      </div>

      <input type="submit"
             class="mt-12 mx-auto px-10 py-4 text-3xl border-black bg-orange rounded-xl
                    bg-orange hover:shadow-xl hover:text-xl transition duration-100 transform hover:scale-105"
             @click="checkForm"
             value="Create event"
      />


    </div>
  </form>
</template>

<script>
import router from "@/router";
import TeamsController from "@/controllers/TeamsController";
import EventsController from "@/controllers/EventsController";
import store from "../../store";
import {Event} from "../../store/Models";

export default {
  name: "CreateEventComponent",
  data() {
    return {
      input: {
        name: '',
        place: '',
        sport: '',
        datetime: '',
        team: '',
        selectedTeamId: null
      },
      teams: [],
      errors: {
          name: false,
          place: false,
          sport: false,
          datetime: false,
          team: false,
      }
    }
  },

  methods: {
    // goBack() {
    //   console.log("back button called")
    //   router.back()
    // },

    createEvent() {
      if (!this.input.selectedTeamId) {
        return;   //toto sa zmeni ak budu public eventy
      }
      const loggedUser = store.state.loggedUser;

      Event.insert({
        data: {
          name: this.input.name,
          place: this.input.place,
          sport: this.input.sport,
          team_id: this.input.selectedTeamId,
          datetime: this.input.datetime.split("T").join(" "),
          attendees: [loggedUser]
        }
      });
      router.push('/events');
    },

    saveTeamIdOnChange(e) {
      const teamId = e.target.value;
      this.input.selectedTeamId = teamId;
    },

    checkForm() {
      this.errors.name = !this.input.name;
      this.errors.place = !this.input.place;
      this.errors.sport = !this.input.sport;
      this.errors.datetime = !this.input.datetime;
      this.errors.team = !this.input.team;

      console.log(this.errors.team);
      if (!this.errors.name && !this.errors.place && !this.errors.sport && !this.errors.datetime && !this.errors.team) {
        this.createEvent()
      }
    }
  },

  mounted() {
    this.teams = TeamsController.getUsersTeams();
  }

}
</script>

<style scoped>

</style>