<template>

  <v-footer class="m-auto flex flex-col sm:px-0 sm:flex-row justify-center flex-wrap py-4 border-2 bg-white font-semibold">

    <div class="mx-4 py-1 px-5 text-center cursor-pointer ">
      © miesiči-app team 2021
    </div>


    <div
        v-if="this.router.currentRoute['name'] !== 'Home' "
        @click="updatePath('/')"
        class="mx-4 py-1 px-5 text-center cursor-pointer "
    >
      Home
    </div>



  </v-footer>
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
    }
  },
  methods: {
    async updatePath(target) {
      console.log('logged user:', this.state.loggedUser);
      await router.push(target);
      console.log('path:', router.currentRoute);
      await store.setCurrentPathAction(target);
    }
  }


}
</script>

<style scoped>

</style>