<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="mb-6 cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>
      <div>
        <h1 class="mb-4 font-semibold text-6xl">
          Events detail
        </h1>
      </div>
      <div class="flex flex-col">
        <div class="flex">
          <div class="text-lg underline italic">
            Event name:
          </div>
          <h1 class="ml-5 text-lg font-semibold">
            {{ this.name }}
          </h1>
        </div>
        <div class="flex">
          <div class="text-lg underline italic">
            Sport:
          </div>
          <h1 class="ml-5 text-lg font-semibold">
            {{ this.sport }}
          </h1>
        </div>
        <div class="flex">
          <div class="text-lg underline italic">
            Place:
          </div>
          <h1 class="ml-5 text-lg font-semibold">
            {{ this.place }}
          </h1>
        </div>
        <div class="flex">
          <div class="text-lg underline italic">
            Date:
          </div>
          <h1 class="ml-5 text-lg font-semibold">
            {{ this.date }}
          </h1>
        </div>
        <div class="flex">
          <div class="text-lg underline italic">
            Time:
          </div>
          <div class="ml-9 font-semibold text-lg">
            {{ this.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";

export default {
  name: "EventDetailComponent",
  props: {
    name: String,
    sport: Array,
    place: String,
    date: Date,
    time: String,
    private: Boolean,
    attendees: Array
  },
  methods: {
    goBack() {
      router.back();
    },
  }
}
</script>

<style scoped>

</style>