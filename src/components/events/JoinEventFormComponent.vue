<template>
  <section class="overlay absolute w-full h-full top-0 left-0 bg-black flex justify-center items-center">
    <div class="relative sm:rounded-2xl bg-white min-w-min w-full h-full pb-10 px-10 sm:w-1/2 sm:h-auto border flex flex-col justify-center sm:justify-start items-center">
      <div class="absolute top-4 right-4 cursor-pointer p-1 "
           @click="closeForm"
      >
        <i class="fas fa-times text-5xl leading-8"></i>
      </div>
      <h2 class="text-3xl font-bold sm:mt-10 sm:max-w-md text-center">You are joining public event without being logged in!</h2>
      <h2 class="text-xl font-semibold mt-5 text-center">Please enter your name below</h2>
      <div class="mt-6">
        <label>Enter your name:</label>
        <input type="text"
               placeholder="Your name"
               class="px-4 py-2 sm:text-3xl flex appearance-none bg-white rounded border"/>
        <button type="button"
                class="mt-2 py-1 px-4 text-white text-2xl rounded border-black bg-brightgreen hover:shadow-xl hover-zoom hover:text-xl">
          Join
        </button>
        <div class="mt-5 text-xl">
          <p>Or <router-link to="/login" class="font-semibold underline">Log In</router-link></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "JoinEventFormComponent",
  methods: {
    closeForm() {
      this.$emit('closeForm')
    }
  }
}
</script>

<style scoped>
.overlay {
  background-color: rgba(20,20,20,0.5);
}
</style>