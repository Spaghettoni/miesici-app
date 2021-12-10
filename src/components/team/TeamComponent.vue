<template>
  <article class="p-0.5 flex flex-shrink">

      <div class="ml-5 flex flex-col ">
        <h1 class="text-2xl font-bold">
          {{ teamName }}
          &nbsp;
        </h1>
        <div class="flex flex-wrap">
          <p class="text-info mr-2">
            <b class="text-label"> members: </b>
            {{ members.length }}
          </p>
        </div>
      </div>

  </article>
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