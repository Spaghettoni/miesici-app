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
      <button type="button" v-on:click="register()"
              class="mt-14 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black">Register</button>

      <div class="mt-5 mx-auto text-xl flex flex-col items-center">
        <p>Already have an account?</p>
        <router-link to="/Login" class="font-semibold underline">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'RegistrationComponent',
  data() {
    return {
      input: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }
    }
  },
  methods: {
    register() {
      if(this.input.username !== "" && this.input.password !== "") {
        localStorage.username = this.input.username;
        localStorage.password = this.input.password;
      } else {
        console.log("A username and password must be present");
      }
    }
  }
}
</script>

<style>

</style>