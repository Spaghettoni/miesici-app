<template>
<div class="w-full flex justify-center">
  <div>
    <h1>My Teams</h1>
  </div>
  <div>
    <div v-bind:key=team v-for="team in this.teams">
      <team-component
          :team-name=team.name
          :members=team.members
      ></team-component>
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