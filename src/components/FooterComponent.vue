<template>

  <footer
      class="mt-10 m-auto mb-16 flex flex-col sm:px-0 sm:flex-row justify-center flex-wrap py-4 bg-gray-light font-semibold">

    <div>

      <div class="flex-col items-center xlg:box-border my-3">

        <nav id="nav"
             class="xlg:float-left m-auto flex-col sm:px-0 sm:flex-row justify-end flex-wrap py-4 font-semibold hidden sm:flex"
             v-if="isLoggedUser">

          <div @click="updatePath('/')"
               class="mx-4 py-1 px-5 text-center cursor-pointer underline hover:text-gray-darker"
          >
            Home
          </div>
          <div v-if="this.state.loggedUser !== null"
               @click="updatePath('/teams')"
               class="mx-4 py-1 px-5 text-center cursor-pointer underline hover:text-gray-darker"
          >
            Teams
          </div>
          <div v-if="this.state.loggedUser !== null"
               @click="updatePath('/events')"
               class="mx-4 py-1 px-5 text-center cursor-pointer underline hover:text-gray-darker"
          >
            Events
          </div>
          <div v-if="this.state.loggedUser !== null"
               @click="updatePath('/profile')"
               class="mx-4 py-1 px-5 text-center cursor-pointer underline hover:text-gray-darker"
          >
            Profile
          </div>
          <div v-if="this.state.loggedUser === null"
               @click="updatePath('/login')"
               class="mx-4 py-1 px-5 text-center cursor-pointer underline hover:text-gray-darker"
          >
            Login
          </div>
          <div v-if="this.state.loggedUser === null"
               @click="updatePath('/register')"
               class="mx-4 py-1 px-5 text-center cursor-pointer underline hover:text-gray-darker mr-10"
          >
            Register
          </div>
          <div v-if="this.state.loggedUser !== null"
               @click="this.logout()"
               class="mx-4 2 py-1 px-5 text-center cursor-pointer underline hover:text-gray-darker mr-10"
          >
            Logout
          </div>
        </nav>

        <div class="xlg:float-right flex-col my-2 mx-5 py-1 px-10 text-center xlg:text-left xlg:border-l-2">
          Do you have a problem, question or suggestion? <br> Contact us.
          <div class="flex justify-center xlg:justify-start space-x-3 mt-1">
            <i class="far fa-envelope cursor-pointer text-2xl hover:text-gray-darker"></i>
            <i class="fab fa-facebook cursor-pointer text-2xl hover:text-gray-darker"></i>
            <i class="fab fa-instagram cursor-pointer text-2xl hover:text-gray-darker"></i>
          </div>
        </div>

      </div>


      <div class="mt-3 py-2 mx-4 px-5 text-center text-sm clear-both">
        ©Copyright 2021-2022 miesiči-app <br> All rights reserved. Powered by miesiči
      </div>

    </div>

  </footer>
</template>

<script>
import LoginController from "../controllers/LoginController";
import router from "../router";
import store from "../store";

export default {
  name: "FooterComponent",
  data() {
    return {
      router: router,
      state: store.state,
      logout: LoginController.logout,
      windowWidth: 0,
    }
  },
  methods: {
    async updatePath(target) {
      await router.push(target);
      console.log('path:', router.currentRoute);
      store.commit('setCurrentPath', target);
    },
    isLoggedUser() {
      return store.state.loggedUser !== null;
    }
  },
  mounted() {
    this.windowWidth = window.outerWidth;
    window.addEventListener('resize', () => {
      this.windowWidth = window.outerWidth;
    });
  }
}
</script>

<style scoped>

</style>