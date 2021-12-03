<template>
  <form class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-col w-full max-w-3xl">
      <div class="mb-6 cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min" @click="goBack">
        &lt;&nbsp;back
      </div>
      <div class="flex justify-between items-center">
        <h1 class="mb-4 font-semibold text-6xl">
          Create new event
        </h1>
      </div>


      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="name">Event name</label>
        <input type="text" id="name" name="name"
               v-model="input.name"
               placeholder="miesici"
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="place">Place</label>
        <input type="text" id="place" name="place"
               v-model="input.place"
               placeholder="place"
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="sport">Sport</label>
        <input type="text" id="sport" name="sport"
               v-model="input.sport"
               placeholder="sport"
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="datetime">Date</label>
        <div class="border-2 border-black rounded w-full">
          <input type="datetime-local" id="datetime" name="datetime"
                 v-model="input.datetime"
                 placeholder="datetime"
                 class="px-4 py-2 text-3xl flex appearance-none bg-white rounded"
          />
        </div>
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl">Team</label>

        <select v-model="input.team" id="team" name="team" @change="saveTeamIdOnChange($event)"
                class="border-2 px-4 py-2 text-2xl rounded">
          <option v-for="option in this.teams" v-bind:value="option.id" v-bind:key="option">
            {{ option.name }}
          </option>
        </select>

      </div>

      <input type="submit"
             class="mt-12 mx-auto px-10 py-4 text-3xl border-black bg-orange rounded-xl
                    bg-orange hover:shadow-xl hover:text-xl transition duration-100 transform hover:scale-105"
             @click="createEvent"
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
    }
  },

  methods: {
    goBack() {
      router.back()
    },

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
    }
  },

  mounted() {
    this.teams = TeamsController.getUsersTeams();
  }

}
</script>

<style scoped>

</style>