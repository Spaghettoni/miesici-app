<template>
  <div class="p-2">
    <div class="flex flex-shrink">
      <div class="ml-5 flex flex-col ">
        <h1 class="text-lg font-semibold">
          {{ teamName }}
          &nbsp;
        </h1>
        <div class="flex flex-wrap">
          <div class="font-semibold text-lg mr-2 ">
            <span class="font-bold"> members: </span>
            {{ members.length }}
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