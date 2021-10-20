<template>
  <div class="p-2">
    <div>
      <div class="flex items-end">
        <div class="text-lg underline italic">
          Team name:
        </div>
        <h1 class="ml-5 text-lg font-semibold">
          {{ teamName }}
        </h1>
      </div>
    </div>
    <div class="flex items-end">
      <div class="text-lg underline italic">
        Members:
      </div>
      <div class="ml-9 font-semibold text-lg"
           v-bind:key=member v-for="member in members">
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