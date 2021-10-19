<template>
  <div id="login" class="border-black border-2">
    <div class="form-inputs">
      <label for="email">Email</label>
      <input type="text" id="email" name="email" v-model="input.email" placeholder="email@gmail.com" />
    </div>
    <div class="form-inputs">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" v-model="input.password" placeholder="password" />
    </div>
    <button type="button" v-on:click="login.login(input.email, input.password)" class="border-2 border-black">Login</button>
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
        email: "",
        password: ""
      }
    }
  },
}
</script>

<style>

</style>