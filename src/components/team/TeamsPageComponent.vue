<template>
  <div class="w-full flex justify-center">
    <div class="p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>
      <div class="mt-6 flex justify-between items-center flex-wrap">
        <h1 class="mb-4 mr-8 font-semibold text-6xl">
          My Teams
        </h1>
        <router-link
            to="/create-team"
            class="flex border items-center border-black bg-orange
                       hover:bg-strongOrange rounded-xl cursor-pointer">
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
        <div class="border flex max-w-min flex-col sm:flex-row">
          <select class="px-4 py-2"
                  v-model="selected"
          >
            <option value="all-teams" class="" @click="filterTeams">
              All teams
            </option>
            <option v-bind:key="team" v-for="team in this.teams"
                    v-bind:value="team.name"
                    @click="filterTeams"
            >
              {{ team.name }}
            </option>
          </select>
          <input type="text" class="px-4 py-2"
                 placeholder="search by member"
                 v-model="member"
                 @input="filterTeams"
          />
        </div>
      </div>
      <div class="flex flex-wrap justify-evenly">
        <router-link class="mt-6 cursor-pointer hover:shadow-xl hover:bg-orange rounded-xl bg-gray-light w-5/12 min-w-full sm:min-w-min"
                     v-bind:key=team v-for="team in this.selectedTeams"
                     :to="{name: 'TeamDetail', query: {teamId: team.id}}">
          <team-component
              :team-name=team.name
              :members=this.memberNames(team)
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
      selectedTeams: null,
      member: '',
    }
  },
  methods: {
    goBack() {
      router.back()
    },

    filterTeams() {
      this.selectedTeams = this.teams.filter(
          (team) =>
              (team.name === this.selected || this.selected === 'all-teams') &&
              (team.members.map((member) => member.username)
              .filter((person) => person.startsWith(this.member)).length > 0 || this.member === '')
      );
    },

    memberNames(team){
       return team.members.map(m => m.username);
    }
  },
  mounted() {
    this.teams = TeamsController.getUsersTeams();
    this.filterTeams();
  }
}
</script>

<style scoped>

</style>