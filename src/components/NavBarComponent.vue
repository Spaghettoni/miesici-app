<template>
  <div id="nav"
       class="m-auto flex flex-col sm:px-0 sm:flex-row justify-end flex-wrap py-4 border-b-2 bg-white font-semibold">
    <div @click="updatePath('/')"
         class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange"
    >
      Home
    </div>
    <div v-if="this.state.loggedUser !== null"
         @click="updatePath('/profile')"
         class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange"
    >
      Profile
    </div>
    <div v-if="this.state.loggedUser !== null"
         @click="updatePath('/teams')"
         class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange"
    >
      Teams
    </div>
    <div v-if="this.state.loggedUser !== null"
         @click="updatePath('/events')"
         class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange"
    >
      Events
    </div>
    <div  v-if="this.state.loggedUser === null"
          @click="updatePath('/login')"
          class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange"
    >
      Login
    </div>
    <div  v-if="this.state.loggedUser === null"
          @click="updatePath('/register')"
          class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange mr-10"
    >
      Register
    </div>
    <div  v-if="this.state.loggedUser !== null"
          @click="this.logout()"
          class="mx-4 border-2 py-1 px-5 text-center cursor-pointer hover:bg-orange mr-10"
    >
      Logout
    </div>
  </div>
</template>

<script>
import LoginController from "../controllers/LoginController";
import router from "../router";
import store from "../store";

const apiURL =
    "https://api.github.com/repos/Spaghettoni/miesici-app/commits?per_page=3&sha=master";
const xhr = new XMLHttpRequest();
xhr.open("GET", apiURL);
xhr.onload = function() {
  let commits = JSON.parse(xhr.responseText);
  console.log(commits[0].commit.author.date.split('T').reverse().join(' ').split('Z').join(' '));
};
xhr.send();


export default {
  name: "NavBarComponent",
  data() {
    return {
      router: router,
      state: store.state,
      logout: LoginController.logout,
    }
  },
  methods: {
    async updatePath(target) {
      console.log('logged user:', this.state.loggedUser);
      await router.push(target);
      console.log('path:', router.currentRoute);
      store.commit('setCurrentPath',target);
    }
  }


}
</script>

<style scoped>

</style>