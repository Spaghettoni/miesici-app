<template>
  <form id="login" class="w-full flex justify-center">
    <div class="mt-4 px-4 max-w-2xl flex flex-col w-full">
      <div>
        <h1 class="font-semibold text-6xl">
          Register
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

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="email">Email</label>
        <input type="text" id="email" name="email"
               v-model="input.email"
               placeholder="email@mail.com"
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
      <div class="mt-6 form-inputs  flex flex-col">
        <label class="text-2xl" for="password">Confirm password</label>
        <input type="password" id="confirm-password" name="password"
               v-model="input.confirmPassword"
               placeholder="password"
               class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>
      <input type="submit" v-on:click="register(input.username, input.password, input.confirmPassword, input.email, '/')"
              class="mt-14 mx-auto px-10 py-4 text-3xl border-2 border-black bg-black hover:bg-orange rounded-xl"
             value = "Register"
      />

      <div class="mt-5 mx-auto text-xl flex flex-col items-center">
        <p>Already have an account?</p>
        <router-link to="/login" class="font-semibold underline">Login</router-link>
      </div>
    </div>
  </form>
</template>

<script>
import RegistrationController from "../controllers/RegistrationController";
import router from "../router";

export default {
  name: 'RegistrationComponent',
  data() {
    return {
      register: RegistrationController.register,
      input: {
        username: "",
        password: "",
        confirmPassword: "",
        email: ""
      },
      route: router.currentRoute,
    }
  },
}
</script>

<style>

</style>