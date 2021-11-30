<template>
  <form id="login" class="w-full flex justify-center">
    <div class="mt-4 px-4 max-w-2xl flex flex-col w-full">
      <div>
        <h1 class="font-semibold text-6xl">
          Login
        </h1>
      </div>
      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="username">Username</label>
        <input type="text" id="username" name="username"
               v-model="input.username"
               placeholder="username"
               class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>
      <div class="mt-6 form-inputs  flex flex-col">
        <label class="text-2xl" for="password">Password</label>
        <input type="password" id="password" name="password"
               v-model="input.password"
               placeholder="password"
               class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>
      <input type="submit" v-on:click="this.login(input.username, input.password, '/events')"
              class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black bg-orange
                       hover:bg-strongOrange rounded-xl cursor-pointer"
             value = "Login"
      />


      <div class="mt-5 mx-auto text-xl flex flex-col items-center">
        <p>Don't have an account yet?</p>
        <router-link to="/register" class="font-semibold underline rounded-xl">Register here!</router-link>
      </div>
    </div>
  </form>
</template>

<script>
import LoginController from "../controllers/LoginController";
import router from "../router";

export default {
  name: 'LoginComponent',
  data() {
    return {
      login: LoginController.login,
      input: {
        username: "",
        password: ""
      },
      route: router.currentRoute,
    }
  },
}
</script>

<style>

</style>