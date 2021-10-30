<template>
  <div class="p-2">
    <div>
      <div class="flex items-end">
        <div class="text-lg underline italic">
          Event name:
        </div>
        <h1 class="ml-5 text-lg font-semibold">
          {{ this.name }}
        </h1>
      </div>
    </div>
    <div class="flex items-end">
      <div class="text-lg underline italic">
        Attendees:
      </div>
      <div class="ml-9 font-semibold text-lg">
        {{ this.attendees.length }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventComponent",
  props: {
    name: String,
    sport: Array,
    place: String,
    date: Date,
    time: String,
    private: Boolean,
    attendees: Array
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>