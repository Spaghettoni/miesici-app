<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
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
               class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="place">Place</label>
        <input type="text" id="place" name="place"
               v-model="input.place"
               placeholder="place"
               class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="sport">Sport</label>
        <input type="text" id="sport" name="sport"
               v-model="input.sport"
               placeholder="sport"
               class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="datetime">Date</label>
        <input type="datetime-local" id="datetime" name="datetime"
               v-model="input.datetime"
               placeholder="datetime"
               class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl">Team</label>

        <select v-model="input.team" id="team" name="team" class="border-2 px-4 py-2 text-2xl">
          <option v-for="option in this.teams" v-bind:value="option.name" v-bind:key="option" >
            {{ option.name }}
          </option>
        </select>

      </div>

      <button type="button"
              class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black
                      hover:bg-orange"
              @click="createEvent"
      >
        Create event
      </button>


    </div>
  </div>
</template>

<script>
import router from "@/router";
import TeamsController from "@/controllers/TeamsController";
import EventsController from "@/controllers/EventsController";

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
      },
      teams: []
    }
  },
  methods: {
    goBack() {
      router.back()
    },
    createEvent(){
      EventsController.insertEvent(
          this.input.name,
          this.input.sport,
          this.input.place,
          this.input.datetime.split("T").join(" "),
          this.input.team
      );
      router.push('/events');
    }
  },
  mounted() {
    this.teams = TeamsController.getTeams();
  }

}
</script>

<style scoped>

</style>