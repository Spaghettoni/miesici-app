<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>

      <div class="mt-6 flex justify-between items-center flex-wrap my-5">
        <h1 class="mb-4 mr-8 font-semibold text-6xl">
          My Profile
        </h1>

        <button
            type="button"
            class="flex border items-center hover:bg-orange cursor-pointer pl-1 pr-3 mx-2"
            v-if="!this.updateInfo"
            @click="setUpdateInfo(true)">
          <img alt="" :src="'/pictures/create.png'" width="40">
            Update information
        </button>

      </div>
      <div>


        <div class="flex">
          <div class="flex flex-col text-right border-r pr-2">

        <img alt="" :src="'/pictures/profile.png'" width="250">
        <button
            type="button"
            class="my-4 flex border items-center hover:bg-orange cursor-pointer">
          <img alt="" :src="'/pictures/create.png'" width="40">
            Change profile picture
        </button>

        </div>

          <div class="flex flex-col ml-5 w-3/4" v-if="this.updateInfo">

            <div class="flex flex-row mb-1 ml-5 text-left">
              <div class="text-lg underline italic">
                Username:
              </div>

              <input type="text" id="username" name="username"
                     :placeholder="this.username" v-model="this.username"
                     class="px-3 font-semisolid text-lg ml-5 border-2 border-gray-light w-9/12"
              />

            </div>

            <div class="flex mr-3 flex-row ml-5">
              <div class="text-lg underline italic ml-8">
                Bio:
              </div>

              <textarea id="bio" v-model="this.bio"
                     class="px-3 font-semisolid text-lg ml-5 border-2 border-gray-light w-10/12 max-h-30"
              />
            </div>

            <div class="flex items-center mr-5 flex-row ml-10 mt-10">
              <button
                  type="button"
                  class="flex border items-center hover:bg-orange cursor-pointer py-1 px-3 mr-10"
                  @click="setUpdateInfo(false)">
                Discard changes
              </button>

              <button
                  type="button"
                  class="flex border items-center hover:bg-orange cursor-pointer py-1 px-3"
                  @click="saveChanges()">
                Save changes
              </button>
            </div>

          </div>

        <div class="flex flex-col ml-5 w-3/4" v-else>

          <div class="flex flex-row ml-5 mb-2 text-left">
          <div class="text-lg underline italic">
            Username:
          </div>

            <div class="font-semisolid text-lg ml-5">
               {{this.username}}
            </div>

            </div>

          <div class="flex mr-3 flex-row ml-5">
          <div class="text-lg underline italic ml-8">
            Bio:
          </div>

          <div class="font-semisolid text-lg ml-5">
              {{ this.bio }}
          </div>
          </div>

        </div>
</div>
          </div>
      </div>
    </div>
</template>

<script>
import router from "../router";
import LoginController from "../controllers/LoginController";

export default {
  name: "ProfileComponent",
  data() {
    return {
      user: null,
      username: null,
      bio: null,
      updateInfo: false,
      items: [
        { Username: this.username},
        { Bio: this.bio},
      ],
    }
  },
  methods: {
    goBack() {
      router.back()
    },
    setUpdateInfo(value) {
      this.updateInfo = value;
    },
    saveChanges() {
      //TODO: implement save data
      this.setUpdateInfo(false);
    }
  },

  mounted() {
    this.user = LoginController.getLoggedUser();
    this.username = this.user.username;
    this.bio = this.user.bio;
  }
}
</script>

<style scoped>

</style>