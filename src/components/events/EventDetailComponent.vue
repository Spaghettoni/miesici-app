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
            Name:
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
            Date and time:
          </div>
          <h1 class="ml-5 text-lg font-semibold">
            {{ this.datetime }}
          </h1>
        </div>

        <div class="flex">
          <div class="text-lg underline italic">
            Team:
          </div>
          <h1 class="ml-5 text-lg font-semibold">
            {{ this.team }}
          </h1>
        </div>

        <div class="flex">
          <div class="text-lg underline italic">
            Attendes:
          </div>
          <h1 class="ml-5 text-lg font-semibold" v-bind:key=attendee v-for="attendee in this.attendees">
            {{attendee}}
          </h1>
        </div>


      </div>

      <div>

      <button type="button"
              class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black
                      hover:bg-orange" v-if="this.isPresent"
              @click="leave"
      >
        LEAVE
      </button>

        <button type="button"
                class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black
                      hover:bg-orange" v-else
                @click="join"
        >
          JOIN
        </button>

      </div>

    </div>
  </div>
</template>

<script>
import router from "../../router";
import EventsController from "@/controllers/EventsController";
import LocalStorageController from "@/controllers/LocalStorageController";
import LoginController from "@/controllers/LoginController";

export default {
  name: "EventDetailComponent",
  props: {
    name: String,
    sport: String,
    place: String,
    datetime: String,
    team: String,
    attendees: Array,
    private: Boolean,
  },
  data(){
    return {
      isPresent: null,
    }
  },
  methods: {
    goBack() {
      router.back();
    },
    join(){
      EventsController.joinEvent(this.name);
      router.back();
    },
    leave(){
      EventsController.leaveEvent(this.name);
      router.back();
    }
  },
  mounted() {
     this.isPresent = this.attendees.includes(LoginController.getLoggedUser())
  }

}
</script>

<style scoped>

</style>