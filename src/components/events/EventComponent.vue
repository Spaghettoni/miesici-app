<template>
  <div class="p-2">
    <div class="flex">
      <div class="flex flex-col text-right border-r pr-2">
        <div class="text-lg underline italic">
          Event name:
        </div>
        <div class="text-lg underline italic">
          Team:
        </div>
        <div class="text-lg underline italic">
          Attendees:
        </div>
        <div class="text-lg underline italic">
          Sport:
        </div>
        <div class="text-lg underline italic">
          Place:
        </div>
        <div class="text-lg underline italic">
          Date and time:
        </div>
      </div>
      <div class="flex flex-col ml-5 ">
        <div class="text-lg font-semibold">
          {{ this.name }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.team }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.attendees.length }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.sport }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.place }}
        </div>
        <div class="font-semibold text-lg">
          {{ this.datetime }}
        </div>
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
    console.log(this.team)
  }
}
</script>

<style scoped>

</style>