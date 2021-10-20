<template>
<div>
  <div>
    Teams
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
import TeamComponent from "./TeamComponent";

export default {
  name: "TeamsComponent",
  components: {TeamComponent},
  data() {
    return {
      teams: null,
    }
  },
  mounted() {
    console.log('Teams Component mounted!');
    console.log('this.teams:', this.teams);
    this.teams = TeamsController.getTeams();
    console.log(this.teams)
  }
}
</script>

<style scoped>

</style>