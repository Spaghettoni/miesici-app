<template>
  <section class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-wrap flex-col w-full max-w-3xl sm:flex-row justify-center">
      <div class="flex flex-col">
        <back-button></back-button>
        <div>
          <h1 class="mb-4 font-semibold text-6xl">
            {{ this.team.name }}
          </h1>
        </div>

        <div class="mt-5">
        <i class="text-lg italic">
          Add new member:
        </i>
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
            <strong class="text-brightred font-semibold" :class="[this.errors.member ? 'block' : 'hidden']">
              <i class="fas fa-exclamation-triangle"></i>
              Please fill in user name!
            </strong>
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
      </div>

      <div class="flex flex-shrink mt-10 sm:mt-0 sm:ml-10 sm:border-l-2 sm:pl-10">
        <ul class="flex flex-col font-semibold text-lg">
          <b class="font-bold"> Members: &nbsp;</b>
          <li class="mr-2"
              v-bind:key=username v-for="username in this.memberNames()">
            {{ username }}
          </li>
        </ul>
      </div>

      <datalist id="allUsernames">
        <option v-for="username in this.allUsernames"
                :key="username" :value="username">
        </option>
      </datalist>
    </div>
  </section>
</template>

<script>
import router from "../../router";
import TeamsController from "../../controllers/TeamsController";
import {Team} from "../../store/Models";
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