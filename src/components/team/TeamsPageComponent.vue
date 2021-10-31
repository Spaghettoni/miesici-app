<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>
      <div class="mt-6 flex justify-between items-center">
        <h1 class="mb-4 font-semibold text-6xl">
          My Teams
        </h1>
        <router-link
            to="/create-team"
            class="ml-14 flex border items-center hover:bg-orange cursor-pointer">
          <img alt="" :src="'/pictures/create.png'" width="50">
          <div class="font-semibold pr-4">
            Create new team
          </div>
        </router-link>
      </div>
      <div>
        <div class="font-semibold">
          Search teams
        </div>
        <div class="border flex max-w-min">
          <select class="px-4 py-2"
                  v-model="selected"
          >
            <option value="all-teams" class="" @click="select">
              All teams
            </option>
            <option v-bind:key="team" v-for="team in this.teams"
                    v-bind:value="team.name"
                    @click="select"
            >
              {{ team.name }}
            </option>
          </select>
          <input type="text" class="px-4 py-2"
                 placeholder="search by member"
          />
        </div>
      </div>
      <div class="flex flex-col">
        <router-link class="mt-6 border cursor-pointer hover:shadow-xl hover:bg-orange"
                     v-bind:key=team v-for="team in this.selectedTeams"
                     :to="{name: 'TeamDetail', params: {teamName: team.name, members: team.members}}">
          <team-component
              :team-name=team.name
              :members=team.members
          ></team-component>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TeamsController from "../../controllers/TeamsController";
import router from "../../router";

export default {
  name: "TeamsComponent",
  data() {
    return {
      teams: null,
      selected: 'all-teams',
      selectedTeams: null
    }
  },
  methods: {
    goBack() {
      router.back()
    },
    select() {
      this.selectedTeams = this.teams.filter((team) => team.name === this.selected || this.selected === 'all-teams');
      console.log('selected:', this.selected, ' selectedTeams:', this.selectedTeams);
    }
  },
  mounted() {
    this.teams = TeamsController.getTeams();
    this.select();
  }
}
</script>

<style scoped>

</style>