<template>
  <div>

    <article class="border-black" v-if="this.state.loggedUser === null">
      <div class="flex flex-col-reverse xlg:flex-row-reverse">
        <figure class="w-full mt-5 xlg:w-1/2 xlg:mt-0 text-center flex">
          <img class="m-auto" alt="Young people having fun playing football." v-bind:src="'/pictures/im1.png'">
        </figure>
        <div class="px-5 sm:px-10 my-auto mx-auto">
          <h2 class="mx-auto mt-7 mb-2 text-heading z-0">
            Meet and play!
          </h2>
          <p class="text-simple-text mb-3">
            Do you want to meet new people and take part in public matches?<br>
            <b>You can join public events even without logging in.</b>
          </p>
          <p class="text-simple-text">
              Do you want to easily manage matches with friends?<br>
            <b>To access teams and create events you have to log in.</b></p>

          <div class="flex-col sm:flex-row text-center">
            <router-link
                to="/login">
              <button
                  class="mt-5 mr-2 ml-auto px-5 py-2 text-2xl border-black bg-orange rounded-xl cursor-pointer hover:shadow-xl
                   hover:text-xl transition duration-100 transform hover:scale-105"
                   @click="updatePath('/login')">
                Login
              </button>
            </router-link>

            <router-link
                to="/register">
              <button
                  class="mt-5 mx-auto px-5 py-2 text-2xl border-black bg-brightgreen rounded-xl cursor-pointer hover:shadow-xl
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
      <div class="flex flex-col-reverse lg:flex-row-reverse">
        <figure class="w-full mt-5 lg:w-1/2 lg:mt-0 text-center flex">
          <img class="m-auto" alt="" v-bind:src="'/pictures/review.png'">
        </figure>
        <div class="px-5 sm:px-10 my-auto mx-auto">
          <h2 class="mx-auto mt-7 mb-2 text-heading z-0">
            Review our app
          </h2>
          <p class="text-simple-text"><b>Help us improve your experience!</b><br>
            Tell us how satisfied you are with our application.</p>
          <div class="flex my-2">
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
            <i class="fas fa-star text-2xl text-gray-light hover:text-orange"></i>
          </div>
          <p class="text-simple-text"> If you have any issues or ideas for improvement, feel free to contact us!</p>

        </div>
      </div>
    </article>

    <article class="border-black bg-gray-light">
      <div class="flex flex-col sm:flex-row justify-center">
        <figure class="mt-3 mx-auto w-1/4 sm:w-1/6 sm:mx-0 sm:my-auto">
          <img alt="" v-bind:src="'/pictures/stats1.png'">
        </figure>
        <div class="px-5 sm:px-10 my-auto">
          <h2 class="mx-auto text-center mt-2 mb-2 text-heading sm:mt-7 z-0">
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

    <div v-if="this.state.loggedUser === null" class="absolute top-10 left-72 px-2.5 py-1 text-gray-light text-info text-center hidden sm:block">
      ▲
    </div>
    <div v-if="this.state.loggedUser === null" class="absolute top-16 left-32 px-2.5 py-1 bg-gray-light rounded-md text-info text-center hidden sm:block">
      Search and join public events!
    </div>

    <div v-if="this.state.loggedUser === null" class="fixed bottom-14 right-16 px-2.5 py-1 opacity-80 text-darkBlue text-info text-center sm:hidden block">
      ▼
    </div>
    <div v-if="this.state.loggedUser === null" class="fixed bottom-20 right-1 px-2.5 py-1 bg-opacity-80 bg-darkBlue text-white rounded-md text-info text-center sm:hidden block">
      Search and join <br> public events!
    </div>

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
      await router.push(target);
      store.commit('setCurrentPath',target);
  },
    async updateActive(target) {
      store.commit('setCurrentPath',target);
    }
},

  mounted() {
    this.updateActive('/');
  }
}
</script>

<style scoped>

</style>