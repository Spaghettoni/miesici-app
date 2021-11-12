<template>
  <div id="nav"
       class="m-auto flex justify-end sm:px-0 sm:flex-row sm:justify-end py-3 sm:py-4 border-b-2 bg-white font-semibold">
    <div @click="updatePath('/')"
         class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange hidden sm:block"
    >
      Home
    </div>
    <div v-if="this.state.loggedUser !== null"
         @click="updatePath('/profile')"
         class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange hidden sm:block"
    >
      Profile
    </div>
    <div v-if="this.state.loggedUser !== null"
         @click="updatePath('/teams')"
         class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange hidden sm:block"
    >
      Teams
    </div>
    <div v-if="this.state.loggedUser !== null"
         @click="updatePath('/events')"
         class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange hidden sm:block"
    >
      Events
    </div>
    <div  v-if="this.state.loggedUser === null"
          @click="updatePath('/login')"
          class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange hidden sm:block"
    >
      Login
    </div>
    <div  v-if="this.state.loggedUser === null"
          @click="updatePath('/register')"
          class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange mr-10 hidden  sm:block"
    >
      Register
    </div>
    <div  v-if="this.state.loggedUser !== null"
          @click="this.logout()"
          class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange mr-10 hidden sm:block"
    >
      Logout
    </div>

    <div
        class="mx-4 border-2 py-2 px-7 text-center cursor-pointer hover:bg-orange flex-shrink sm:hidden font-bold select-none"
        @click="toggleNav"
    >
      =
    </div>
    <div class="burgir absolute top-16 py-4 flex flex-grow w-full flex-col sm:hidden bg-white border-2"
         v-if="this.showMenu"
    >
      <div @click="updatePath('/')"
           class="mx-4 border-2 py-2 px-5 text-center cursor-pointer bg-white hover:bg-orange relative"
      >
        Home
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/profile')"
           class="mx-4 border-2 py-2 px-5 text-center cursor-pointer bg-white hover:bg-orange relative"
      >
        Profile
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/teams')"
           class="mx-4 border-2 py-2 px-5 text-center cursor-pointer bg-white hover:bg-orange"
      >
        Teams
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/events')"
           class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Events
      </div>
      <div  v-if="this.state.loggedUser === null"
            @click="updatePath('/login')"
            class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Login
      </div>
      <div  v-if="this.state.loggedUser === null"
            @click="updatePath('/register')"
            class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Register
      </div>
      <div  v-if="this.state.loggedUser !== null"
            @click="this.logout()"
            class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange"
      >
        Logout
      </div>
    </div>
  </div>
</template>

<script>
import LoginController from "../controllers/LoginController";
import router from "../router";
import store from "../store";



export default {
  name: "NavBarComponent",
  data() {
    return {
      router: router,
      state: store.state,
      logout: LoginController.logout,
      showMenu: false,
    }
  },
  methods: {
    async updatePath(target) {
      this.showMenu = false;
      console.log('logged user:', this.state.loggedUser);
      await router.push(target);
      console.log('path:', router.currentRoute);
      store.commit('setCurrentPath',target);

    },
    toggleNav() {
      this.showMenu = !this.showMenu;
    }
  },
}
</script>

<style scoped>
.burgir {
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.80);
}
</style>