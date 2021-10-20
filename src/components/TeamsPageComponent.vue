<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-2xl border-2">
      <div>
        <h1 class="mb-4 font-semibold text-6xl">
          My Teams
        </h1>
      </div>
      <div class="flex flex-col">
        <router-link class="mt-6 border cursor-pointer hover:shadow-xl hover:bg-orange"
            v-bind:key=team v-for="team in this.teams"
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
import TeamsController from "../controllers/TeamsController";

export default {
  name: "TeamsComponent",
  data() {
    return {
      teams: null,
    }
  },
  mounted() {
    this.teams = TeamsController.getTeams();
  }
}
</script>

<style scoped>

</style>