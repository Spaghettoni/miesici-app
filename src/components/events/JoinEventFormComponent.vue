<template>
  <section class="overlay absolute w-full h-full top-0 left-0 bg-black flex justify-center items-center">
    <div
        class="relative sm:rounded-2xl bg-white min-w-min w-full h-full pb-10 px-10 sm:w-1/2 sm:h-auto border flex flex-col justify-center sm:justify-start items-center">
      <div class="absolute top-4 right-4 cursor-pointer p-1 "
           @click="$emit('closeForm')"
      >
        <i class="fas fa-times text-5xl leading-8"></i>
      </div>
      <h2 class="text-3xl font-bold sm:mt-10 sm:max-w-md text-center">You are joining public event without being logged
        in!</h2>
      <h2 class="text-xl font-semibold mt-5 text-center">Please enter your name below</h2>
      <div class="mt-6">
        <label>Enter your name:</label>
        <input type="text"
               placeholder="Your name"
               v-model="this.name"
               class="px-4 py-2 sm:text-3xl flex appearance-none bg-white rounded border"/>
        <span class="text-brightred font-semibold" :class="[this.errors.name ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in your name!
        </span>
        <label>Enter your email:</label>
        <input type="text"
               placeholder="Your email"
               v-model="this.email"
               class="px-4 py-2 sm:text-3xl flex appearance-none bg-white rounded border"/>

        <button type="button"
                class="mt-2 py-1 px-4 text-white text-2xl rounded border-black bg-brightgreen hover:shadow-xl hover-zoom hover:text-xl"
                @click="join"
        >
          Join
        </button>
        <div class="mt-5 text-xl">
          <p>Or
            <router-link to="/login" class="font-semibold underline">Log In</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RegistrationController from "../../controllers/RegistrationController";
import UsersController from "../../controllers/UsersController";
import EventsController from "../../controllers/EventsController";
import LoginController from "../../controllers/LoginController";

export default {
  name: "JoinEventFormComponent",
  data() {
    return {
      name: '',
      email: '',
      errors: {
        name: false,
      }
    }
  },
  props: {
    eventId: String,
  },
  methods: {
    closeForm() {
      this.$emit('closeForm')
    },
    async join() {
      this.errors.name = !this.name;
      if (!this.errors.name) {
        let identifier = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        const guestUsername = this.name + ' - Guest' + identifier;
        await RegistrationController.register(guestUsername, guestUsername, guestUsername, 'guest@guest.com', '/events');
        const newGuest = UsersController.findByUsername(guestUsername)[0];
        await LoginController.loginGuest(newGuest)
        EventsController.joinEvent(this.eventId);
        this.closeForm();
      }
    }
  }
}
</script>

<style scoped>
.overlay {
  background-color: rgba(20, 20, 20, 0.5);
}
</style>