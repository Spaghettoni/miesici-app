<template>
  <div>
    <div>
      <h1>Team name: {{ teamName }}</h1>
    </div>
    <div>
      Members:
      <div v-bind:key=member v-for="member in members">
        {{ member }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamComponent",
  props: {
    teamName: String,
    members: Array,
  },
  mounted() {
    console.log('team name', this.teamName, 'members', this.members);
  }
}
</script>

<style scoped>

</style>