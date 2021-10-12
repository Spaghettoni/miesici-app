<template>
  <div id="login" class="border-black border-2">
    <div class="form-inputs">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" v-model="input.username" placeholder="Username" />
    </div>
    <div class="form-inputs">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" v-model="input.password" placeholder="Password" />
    </div>
    <button type="button" v-on:click="register()" class="border-2 border-black">Register</button>
  </div>
</template>

<script>

export default {
  name: 'RegistrationComponent',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    register() {
      if(this.input.username != "" && this.input.password != "") {
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