<template>
  <div>

    <article class="border-black" v-if="this.state.loggedUser === null">
      <div class="flex flex-col-reverse lg:flex-row">
        <div class="w-full mt-5 lg:w-1/2 lg:mt-0">
          <img alt="" v-bind:src="'/pictures/im1.png'">
        </div>
        <div class="px-5 sm:px-10 my-auto mx-auto">
          <h2 class="mx-auto mt-7 mb-2 text-3xl sm:text-6xl font-bold z-0">
            Meet and play!
          </h2>
          <p>Do you want to easily manage matches with friends?</p>
          <p><b>Log in, create team and manage your sport events with ease!</b></p>

          <div class="flex-col sm:space-x-2.5 sm:flex-row">
            <router-link
                to="/login">
              <button
                  class="mt-5 mx-auto px-10 py-4 text-3xl border-black bg-orange rounded-xl cursor-pointer hover:shadow-xl
                   hover:text-xl transition duration-100 transform hover:scale-105"
                   @click="updatePath('/login')">
                Login
              </button>
            </router-link>

            <router-link
                to="/register">
              <button
                  class="mt-5 mx-auto px-10 py-4 text-3xl border-black bg-brightgreen rounded-xl cursor-pointer hover:shadow-xl
                   hover:text-xl transition duration-100 transform hover:scale-105"
                   @click="updatePath('/register')">
                Register
              </button>
            </router-link>
          </div>

        </div>
      </div>
    </article>

    <article class="border-black" v-if="this.state.loggedUser !== null">
      <div class="flex flex-col-reverse lg:flex-row">
        <div class="w-full mt-5 lg:w-1/2 lg:mt-0">
          <img alt="" v-bind:src="'/pictures/review.png'">
        </div>
        <div class="px-5 sm:px-10 my-auto mx-auto">
          <h2 class="mx-auto mt-7 mb-2 text-3xl sm:text-6xl font-bold z-0">
            Review our app
          </h2>
          <p><b>Help us improve your experience!</b></p>
          <p>Tell us how satisfied you are with our application.</p>
          <div class="flex my-2">
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
          </div>
          <p>If you have any issues or ideas for improvement, feel free to contact us!</p>

        </div>
      </div>
    </article>

    <article class="border-black bg-gray-light">
      <div class="flex flex-col sm:flex-row justify-center">
        <div class="mt-3 mx-auto w-1/4 sm:w-1/6 sm:mx-0 sm:my-auto">
          <img alt="" v-bind:src="'/pictures/stats1.png'">
        </div>
        <div class="px-5 sm:px-10 my-auto">
          <h2 class="mx-auto text-center mt-2 mb-2 text-3xl sm:text-6xl sm:mt-7 font-bold z-0">
            App in numbers
          </h2>

          <div class="flex mt-4 justify-evenly">
            <div class="flex-col justify-items-end">
              <div class="text-center text-2xl">
                <b>1000</b>
              </div>
              <div class="px-1 w-20 h-32 text-center bg-black text-gray-light text-xl">
                created events
              </div>
            </div>
            <div class="flex-col justify-items-end">
              <div class="h-4"></div>
              <div class="text-center text-2xl">
                <b>100</b>
              </div>
              <div class="px-1 w-20 h-28 text-center bg-black text-gray-light text-xl">
                active users
              </div>
            </div>
            <div class="flex-col justify-items-end">
              <div class="h-12"></div>
              <div class="text-center text-2xl">
                <b>25</b>
              </div>
              <div class="px-1 w-20 h-20 text-center bg-black text-gray-light text-xl">
                created teams
              </div>
            </div>
          </div>

        </div>
      </div>
    </article>

<!--    <article class="border-black">-->
<!--      <div class="flex flex-col-reverse sm:flex-col">-->
<!--        <div class="px-5 sm:px-10 my-auto">-->
<!--          <h2 class="mx-auto mt-7 mb-2 text-4xl sm:text-6xl font-bold z-0">-->
<!--            What can you do?-->
<!--          </h2>-->
<!--          </div>-->

<!--          <div class="flex">-->
<!--          <h1 class="mx-auto mt-7 mb-2 text-2xl sm:text-3xl font-bold z-0">-->
<!--            Teams-->
<!--          </h1>-->
<!--          </div>-->

<!--          <div class="flex">-->
<!--          <h1 class="mx-auto mt-7 mb-2 text-2xl sm:text-3xl font-bold z-0">-->
<!--            Events-->
<!--          </h1>-->

<!--          <p>You have an overview of all events.-->
<!--          Events are sorted by date and time.-->
<!--          You can create an event for any of your teams.-->
<!--            You can also joined or leave events of the teams you are a member of. </p>-->

<!--            <div class="my-3 w-1/3">-->
<!--              <img alt="" v-bind:src="'/pictures/teams.png'">-->
<!--            </div>-->

<!--          </div>-->


<!--          <div class="my-3 w-1/3">-->
<!--            <img alt="" v-bind:src="'/pictures/search.png'">-->
<!--          </div>-->

<!--          <div class="my-3 w-1/3">-->
<!--            <img alt="" v-bind:src="'/pictures/addmember.png'">-->
<!--          </div>-->

<!--          <div class="my-3 w-1/3">-->
<!--            <img alt="" v-bind:src="'/pictures/events.png'">-->
<!--          </div>-->

<!--          <div class="my-3 w-1/3">-->
<!--            <img alt="" v-bind:src="'/pictures/eventdetail.png'">-->
<!--          </div>-->

<!--      </div>-->
<!--    </article>-->

  </div>
</template>

<script>
import store from "../store";
import router from "../router";

export default {
  name: "HomeComponent",
  data() {
    return {
      state: store.state,
    }
  },

  methods: {
  async updatePath(target) {
    this.showMenu = false;
    await router.push(target);
    store.commit('setCurrentPath',target);
  }
}

}
</script>

<style scoped>

</style>