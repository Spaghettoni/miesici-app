<template>

  <footer class="m-auto mt-8 flex flex-col sm:px-0 sm:flex-row justify-center flex-wrap py-4 border-2 bg-white font-semibold">

    <div>

    <div class="mx-4 py-1 px-5 text-center">
      ©Copyright 2021-2022  miesiči-app
    </div>

    <div class="mx-4 py-1 px-5 text-center">
      All rights reserved. Powered by miesiči
    </div>


    <nav id="nav"
         class="m-auto flex flex-col sm:px-0 sm:flex-row justify-end flex-wrap py-4 bg-white font-semibold"
         v-if="( this.windowWidth > 630 && !(['/login', '/register', '/'].includes(this.state.currentPath)))" >


      <div @click="updatePath('/')"
           class="mx-4 py-1 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Home
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/profile')"
           class="mx-4 py-1 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Profile
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/teams')"
           class="mx-4 py-1 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Teams
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/events')"
           class="mx-4 py-1 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Events
      </div>
      <div  v-if="this.state.loggedUser === null"
            @click="updatePath('/login')"
            class="mx-4 py-1 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Login
      </div>
      <div  v-if="this.state.loggedUser === null"
            @click="updatePath('/register')"
            class="mx-4 py-1 px-5 text-center cursor-pointer hover:bg-orange mr-10"
      >
        Register
      </div>
      <div  v-if="this.state.loggedUser !== null"
            @click="this.logout()"
            class="mx-4 2 py-1 px-5 text-center cursor-pointer hover:bg-orange mr-10"
      >
        Logout
      </div>
    </nav>

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
      console.log('logged user:', this.state.loggedUser);
      await router.push(target);
      console.log('path:', router.currentRoute);
      await store.setCurrentPathAction(target);
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