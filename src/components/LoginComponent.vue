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
      <button type="button" v-on:click="login()"
              class="mt-14 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black">Login</button>

      <div class="mt-5 mx-auto text-xl flex flex-col items-center">
        <p>Don't have an account yet?</p>
        <router-link to="/Registration" class="font-semibold underline">Register here!</router-link>
      </div>
    </div>
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