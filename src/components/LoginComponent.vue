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
    <button type="button" v-on:click="login()" class="border-2 border-black">Login</button>
  </div>
</template>

<script>
import router from "@/router";
import NotFoundComponent from "@/components/NotFoundComponent";
import UpcomingEventsComponent from "@/components/UpcomingEventsComponent";

export default {
  name: 'LoginComponent',
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      if(this.input.username != "" && this.input.password != "") {
        // This should actually be an api call not a check against this.$parent.mockAccount
        // if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
        //   this.$emit("authenticated", true);
        //   this.$router.replace({ name: "Secure" });
        // } else {
        //   console.log("The username and / or password is incorrect");
        // }
        if(this.input.username == "filip" && this.input.password == "filip") {
          // this.$emit("authenticated", true);
          router.push(UpcomingEventsComponent);
        } else {
          console.log("The username and / or password is incorrect");
          router.push(NotFoundComponent);
        }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
}
</script>

<style>

</style>