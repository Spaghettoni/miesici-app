<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-col w-full max-w-3xl">
      <div class="mb-6 cursor-pointer font-semibold hover:text-orange px-5 py-3 border max-w-min"
           @click="goBack"
      >
        <!-- <img alt="back" :src="'/pictures/backIcon.'" width="50"> -->
        &lt;&nbsp;back
      </div>
      <div>
        <h1 class="mb-4 font-semibold text-6xl">
          {{ this.team.name }}
        </h1>
      </div>
      <div class="flex flex-shrink">
        <div class="flex flex-col">
          <div class="flex flex-wrap font-semibold text-lg">
            <span class="font-bold"> members: &nbsp;</span>
            <div class="mr-2"
                 v-bind:key=username v-for="username in this.memberNames()">
              {{ username }},

            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div class="text-lg italic">
          Add new member:
        </div>
        <div class="flex flex-col sm:flex-row">
          <input type="text" id="newMember" name="member"
                 v-model="input.member"
                 placeholder="Tomero"
                 class="px-4 py-2 text-xl border-2 border-black max-w-sm"
          />
          <div class="sm:ml-4 mt-4 sm:mt-0 text-center align-middle max-w-min">
            <button class="h-full w-full px-6 py-2 border-2 border-black bg-orange
                           rounded-xl font-semibold text-xl hover:shadow-xl
                            hover:text-xl transition duration-100 transform hover:scale-105"
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
import {Team} from "../../store/Models";

export default {
  name: "TeamDetailComponent",

  data() {
    return {
      input: {
        member: '',
      },
      team: null,
      teamId: null
    }
  },

  methods: {
    goBack() {
      router.back();
    },

    addMember() {
      TeamsController.addMember(this.teamId, this.input.member);
      this.loadTeam();
    },

    loadTeam(){
      this.team = Team.query().whereId(this.teamId).with('members').first();
      if(this.team === null){
        this.team = {
          id: "",
          name: "",
          members: [],
          events: []
        }
        router.replace("/NotFound");
      }
      
    },

    memberNames(){
       return this.team.members.map(a => a.username);
    },
  },

  created(){
    this.teamId = this.$route.query.teamId;
    this.loadTeam();
  }
}
</script>

<style scoped>

</style>