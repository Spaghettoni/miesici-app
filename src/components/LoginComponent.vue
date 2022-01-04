<template>
  <form id="login" class="w-full flex justify-center" @submit.prevent="checkForm">
    <div class="mt-6 px-4 max-w-2xl flex flex-col w-full">
      <div>
        <h1 class="text-heading">
          Login
        </h1>
      </div>
      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="username">Username</label>
        <input type="text" id="username" name="username"
               v-model="input.username"
               placeholder="username"
               class="px-4 py-2 text-4xl border-2 border-black rounded"
               @input="() => {this.errors.username = ''}"
        />
        <p class="text-brightred font-semibold" :class="[!!this.errors.username ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          {{ this.errors.username }}
        </p>
      </div>
      <div class="mt-6 form-inputs  flex flex-col">
        <label class="text-2xl" for="password">Password</label>
        <input type="password" id="password" name="password"
               v-model="input.password"
               placeholder="password"
               class="px-4 py-2 text-4xl border-2 border-black rounded"
               @input="() => {this.errors.password = ''}"
        />
        <p class="text-brightred font-semibold" :class="[!!this.errors.password ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          {{ this.errors.password }}
        </p>
      </div>
      <input type="submit"
             class="mt-12 mx-auto px-10 py-4 text-3xl border-black bg-orange rounded-xl
                    bg-orange hover:shadow-xl hover:text-xl transition duration-100 transform hover:scale-105"
             value = "Login"
      />


      <div class="mt-5 mx-auto text-xl flex flex-col items-center">
        <p>Don't have an account yet?</p>
        <router-link to="/register" class="font-semibold underline hover:text-orange">Register here!</router-link>
      </div>
    </div>
  </form>
</template>

<script>
import LoginController from "../controllers/LoginController";
import router from "../router";
import UsersController from "../controllers/UsersController";
import store from "../store";

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
      errors: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    checkForm(){
      if (this.input.username && this.input.password) {
        let foundUsers = UsersController.findByUsernameAndPassword(this.input.username, this.input.password);

        if(foundUsers.length === 0) {
          this.errors.username = "Invalid credentials!";
          this.errors.password = "Invalid credentials!";
        } else {
          this.login(this.input.username, this.input.password, '/events');
        }
      } else {
        this.errors.username = !this.input.username ? "Please fill in your username!" : "";
        this.errors.password = !this.input.password ? "Please fill in your password!" : "";
      }
    },

    async updateActive(target) {
      store.commit('setCurrentPath',target);
    },
  },

  mounted() {
    this.updateActive('/login');
  }
}
</script>

<style>

</style>