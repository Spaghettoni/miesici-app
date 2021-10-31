<template>
  <div class="p-2">
    <div class="flex flex-shrink">
      <div class="flex flex-col ">
        <div class="text-lg underline italic">
          Team&nbsp;name:
        </div>
        <div class="text-lg underline italic">
          Members:
        </div>
      </div>
      <div class="ml-5 flex flex-col ">
        <h1 class="text-lg font-semibold">
          {{ teamName }}
        </h1>
        <div class="flex flex-wrap">
          <div class="font-semibold text-lg mr-2 "
               v-bind:key=member v-for="member in members">
            {{ member }},
          </div>
        </div>
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
  }
}
</script>

<style scoped>

</style>