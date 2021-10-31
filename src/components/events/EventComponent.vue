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
        Team:
      </div>
      <div class="ml-9 font-semibold text-lg">
        {{ this.team }}
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

    <div class="flex items-end">
      <div class="text-lg underline italic">
        Sport:
      </div>
      <div class="ml-9 font-semibold text-lg">
        {{ this.sport}}
      </div>
    </div>

    <div class="flex items-end">
      <div class="text-lg underline italic">
        Place:
      </div>
      <div class="ml-9 font-semibold text-lg">
        {{ this.place}}
      </div>
    </div>

    <div class="flex items-end">
      <div class="text-lg underline italic">
        Date and time:
      </div>
      <div class="ml-9 font-semibold text-lg">
        {{ this.datetime}}
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "EventComponent",
  props: {
    name: String,
    team: String,
    sport: String,
    place: String,
    datetime: String,
    private: Boolean,
    attendees: Array
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>