<template>
  <div id="header" class="flex">
    <div @click="updatePath('/')"
          class="ml-10 self-start cursor-pointer">
      <img alt="" :src="'/pictures/icon2.png'" width="100">

    </div>

    <nav id="nav"
         class="self-end m-auto flex justify-end sm:px-0 sm:flex-row sm:justify-end py-4 sm:py-4 bg-white font-semibold">

      <div @click="updatePath('/')"
           class="mx-4 border-2 py-1 px-7 text-center cursor-pointer hover:bg-orange hidden sm:block"
           v-bind:class="{active: activePage === '/'}"
      >
        Home
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/profile')"
           class="mx-4 border-2 py-1 px-7 text-center cursor-pointer hover:bg-orange hidden sm:block"
           v-bind:class="{active: activePage === '/profile'}"
      >
        Profile
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/teams')"
           class="mx-4 border-2 py-1 px-7 text-center cursor-pointer hover:bg-orange hidden sm:block"
           v-bind:class="{active: activePage === '/teams'}"
      >
        Teams
      </div>
      <div v-if="this.state.loggedUser !== null"
           @click="updatePath('/events')"
           class="mx-4 border-2 py-1 px-7 text-center cursor-pointer hover:bg-orange hidden sm:block"
           v-bind:class="{active: activePage === '/events'}"
      >
        Events
      </div>
      <div  v-if="this.state.loggedUser === null"
            @click="updatePath('/login')"
            class="mx-4 border-2 py-1 px-7 text-center cursor-pointer hover:bg-orange hidden sm:block"
            v-bind:class="{active: activePage === '/login'}"
      >
        Login
      </div>
      <div  v-if="this.state.loggedUser === null"
            @click="updatePath('/register')"
            class="mx-4 border-2 py-1 px-7 text-center cursor-pointer hover:bg-orange mr-10 hidden  sm:block"
            v-bind:class="{active: activePage === '/register'}"
      >
        Register
      </div>
      <div  v-if="this.state.loggedUser !== null"
            @click="this.logout()"
            class="mx-4 border-2 py-1 px-7 text-center cursor-pointer hover:bg-orange mr-10 hidden sm:block"
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
             class="mx-4 border-2 py-2 px-5 text-center cursor-pointer bg-white hover:bg-orange active:bg-white relative"
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
             class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange active:bg-white "
        >
          Events
        </div>
        <div  v-if="this.state.loggedUser === null"
              @click="updatePath('/login')"
              class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange active:bg-white"
        >
          Login
        </div>
        <div  v-if="this.state.loggedUser === null"
              @click="updatePath('/register')"
              class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange active:bg-white"
        >
          Register
        </div>
        <div  v-if="this.state.loggedUser !== null"
              @click="this.logout()"
              class="mx-4 border-2 py-2 px-5 text-center cursor-pointer hover:bg-orange active:bg-white"
        >
          Logout
        </div>
      </div>
    </nav>
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
      // logout: LoginController.logout,
      showMenu: false,
      activePage: null,
    }
  },
  methods: {
    async updatePath(target) {
      this.showMenu = false;
      console.log('logged user:', this.state.loggedUser);
      await router.push(target);
      console.log('path:', router.currentRoute);
      store.commit('setCurrentPath',target);
      //TODO problem po login -> nezobrazi ako aktivnu stranku Upcoming events
      this.activePage = target;
    },
    toggleNav() {
      this.showMenu = !this.showMenu;
    },
    logout() {
      LoginController.logout();
      this.activePage = '/';
    }
  },

  mounted() {
    this.activePage = store.state.currentPath;
  }
}
</script>

<style scoped>
.burgir {
  box-shadow: 0 40px 50px rgba(0, 0, 0, 0.80);
}

#header {
  background-color: black;
}

#nav {
  background-color: black;
  color: white;
}

#nav :hover {
  color: black;
}

.active {
  background-color: white;
  color: black;
}

.active2 {

}

</style>