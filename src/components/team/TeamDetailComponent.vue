<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-3xl border-2">
      <div class="mb-6 cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        &lt;&nbsp;back
      </div>
      <div>
        <h1 class="mb-4 font-semibold text-6xl">
          Team detail
        </h1>
      </div>
      <div class="flex flex-shrink">
        <div class="flex flex-col ">
          <div class="text-lg underline italic">
            Team&nbsp;name:
          </div>
          <div class="text-lg underline italic">
            Members:
          </div>
        </div>
        <div class="ml-5 flex flex-col ">
          <h1 class="text-lg font-semibold">
            {{ teamName }}
            &nbsp;
          </h1>
          <div class="flex flex-wrap">
            <div class="font-semibold text-lg mr-2 "
                 v-bind:key=member v-for="member in this.members">
              {{ member }},

            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div class="text-lg italic underline">
          Add new member:
        </div>
        <div class="flex">
          <input type="text" id="newMember" name="member"
                 v-model="input.member"
                 placeholder="Tomero"
                 class="px-4 py-2 text-xl border-2 border-black"
          />
          <div class="ml-4 text-center align-middle border hover:bg-orange">
            <button class="h-full w-full px-4"
                    @click="addMember"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../router";
import TeamsController from "../../controllers/TeamsController";
import UsersController from "../../controllers/UsersController";

export default {
  name: "TeamDetailComponent",
  props: {
    teamName: String,
  },
  data() {
    return {
      input: {
        member: '',
      },
      members: []
    }
  },
  methods: {
    goBack() {
      router.back();
    },

    addMember() {
      if (UsersController.doesUserExist(this.input.member) && !this.members.includes(this.input.member)) {
        this.members.push(this.input.member);
      }
      TeamsController.addMember(this.teamName, this.input.member);
    },
  },
  mounted() {
    this.members = TeamsController.getTeams().filter((team) => team.name === this.teamName)[0].members;
  }
}
</script>

<style scoped>

</style>