<template>
  <div id="login" class="w-full flex justify-center">
    <div class="mx-6 mt-10 p-10 max-w-2xl border-2 flex flex-col w-full">
      <div class="form-inputs flex flex-col">
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
      <button type="button" v-on:click="login.login(input.username, input.password, '/')"
              class="mt-14 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black
                      hover:bg-orange"
      >
        Login
      </button>

      <div class="mt-5 mx-auto text-xl flex flex-col items-center">
        <p>Don't have an account yet?</p>
        <router-link to="/register" class="font-semibold underline">Register here!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import {LoginController} from "../controllers/LoginController";

export default {
  name: 'LoginComponent',
  data() {
    return {
      login: new LoginController(),
      input: {
        username: "",
        password: ""
      }
    }
  },
}
</script>

<style>

</style>