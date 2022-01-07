<template>
  <form id="login" class="w-full flex justify-center">
    <div class="mt-6 px-4 max-w-2xl flex flex-col w-full">
      <div>
        <h1 class="text-heading">
          Register
        </h1>
      </div>
      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="username">Username</label>
        <input type="text" id="username" name="username"
               v-model="input.username"
               placeholder="username"
               required
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
        <span class="text-brightred font-semibold" :class="[this.errors.username ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in your username!
        </span>
      </div>

      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="email">Email</label>
        <input type="text" id="email" name="email"
               v-model="input.email"
               placeholder="email@mail.com"
               required
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
        <span class="text-brightred font-semibold" :class="[this.errors.email ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in your email!
        </span>
      </div>

      <div class="mt-6 form-inputs  flex flex-col">
        <label class="text-2xl" for="password">Password</label>
        <input type="password" id="password" name="password"
               v-model="input.password"
               placeholder="password"
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
        <span class="text-brightred font-semibold" :class="[this.errors.password ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in your password!
        </span>
      </div>
      <div class="mt-6 form-inputs  flex flex-col">
        <label class="text-2xl" for="password">Confirm password</label>
        <input type="password" id="confirm-password" name="password"
               v-model="input.confirmPassword"
               placeholder="password"
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
      </div>
      <span class="text-brightred font-semibold" :class="[this.errors.confirmPassword ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please confirm your password!
        </span>
      <div class="mt-6 flex">
        <input type="checkbox" class="w-6"/>
        <label class="text-2xl ml-4">I want to recieve emails with event notifications</label>
      </div>
      <input type="submit" v-on:click="checkForm"
             class="mt-12 mx-auto px-10 py-4 text-3xl border-black bg-orange rounded-xl
                    bg-orange hover:shadow-xl hover:text-xl transition duration-100 transform hover:scale-105"
             value = "Register"
      />

      <div class="mt-5 mx-auto text-xl flex flex-col items-center">
        <p>Already have an account?</p>
        <router-link to="/login" class="font-semibold underline hover:text-orange">Login</router-link>
      </div>
    </div>
  </form>
</template>

<script>
import RegistrationController from "../controllers/RegistrationController";
import router from "../router";
import store from "../store";

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
      errors: {
        username: false,
        password: false,
        confirmPassword: false,
        email: false
      },
      route: router.currentRoute,
    }
  },
  methods: {
    checkForm() {
      this.errors.username = !this.input.username;
      this.errors.password = !this.input.password;
      this.errors.confirmPassword = !this.input.confirmPassword;
      this.errors.email = !this.input.email;

      if (!this.errors.username && !this.errors.password && !this.errors.confirmPassword && !this.errors.email) {
        this.register(this.input.username, this.input.password, this.input.confirmPassword, this.input.email, '/login');
      }
    },

    async updateActive(target) {
      store.commit('setCurrentPath',target);
    },

    async updatePath(target) {
      await router.push(target);
      store.commit('setCurrentPath',target);
    },
  },

  mounted() {
    this.updateActive('/register');
  }
}
</script>

<style>

</style>