<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-col w-full max-w-3xl">
      <back-button></back-button>
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
        <form class="flex flex-col sm:flex-row">
          <div>
            <input type="text" id="newMember" name="member"
                   v-model="input.member"
                   placeholder="Tomero"
                   class="px-4 py-2 text-xl border-2 border-black max-w-sm rounded"
                   required
                   list="allUsernames"
                   autocomplete="on"
            />
            <span class="text-brightred font-semibold" :class="[this.errors.member ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in user name!
          </span>
          </div>
          <div class="sm:ml-4 mt-4 sm:mt-0 text-center max-w-min">
            <input type="submit" class="w-full px-6 py-2.5 border-black bg-orange
                           rounded-xl font-semibold text-lg hover:shadow-xl
                            hover-zoom"
                   @click="checkForm"
                   value="Add"
            >
          </div>
        </form>
      </div>

      <datalist id="allUsernames">
          <option v-for="username in this.allUsernames"
           :key="username" :value="username">
          </option>
      </datalist>
    </div>
  </div>
</template>

<script>
import router from "../../router";
import TeamsController from "../../controllers/TeamsController";
import {Team} from "../../store/Models";
import BackButton from "@/components/events/BackButton";
import UsersController from '../../controllers/UsersController';

export default {
  name: "TeamDetailComponent",

  data() {
    return {
      input: {
        member: '',
      },
      errors: {
        member: false,
      },
      team: null,
      teamId: null,
      allUsernames: []
    }
  },

  methods: {
    goBack() {
      router.back();
    },

    addMember() {
      TeamsController.addMember(this.teamId, this.input.member);
      this.loadTeam();
      this.input.member = "";
    },

    loadTeam() {
      this.team = Team.query().whereId(this.teamId).with('members').first();
      if (this.team === null) {
        this.team = {
          id: "",
          name: "",
          members: [],
          events: []
        }
        router.replace("/NotFound");
      }

    },
    memberNames() {
      return this.team.members.map(a => a.username);
    },
    checkForm() {
      this.errors.member = !this.input.member;

      if (!this.errors.member) {
        this.addMember();
      }
    }
  },

  created() {
    this.teamId = this.$route.query.teamId;
    this.loadTeam();

    this.allUsernames = UsersController.allUsernames();
  }
}
</script>

<style scoped>

</style>