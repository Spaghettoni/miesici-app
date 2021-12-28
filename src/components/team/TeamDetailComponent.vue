<template>
  <section class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-wrap flex-col w-full max-w-3xl sm:flex-row justify-center">
      <div class="flex flex-col">

        <div class="flex flex-row">
          <back-button></back-button>

          <button type="button"
                  class="mb-6 ml-auto mr-2 px-5 py-4 text-white text-1xl rounded-xl border-black bg-brightred
                          hover:shadow-xl hover:text-xl hover-zoom sm:hidden"
                  @click="deleteTeam"
          >
            <i class="fas fa-trash-alt"></i> DELETE TEAM
          </button>
        </div>

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
              <datalist id="allUsernames">
                <option v-for="username in this.allUsernames"
                        :key="username" :value="username">
                </option>
              </datalist>
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

      <div class="flex flex-col flex-shrink mt-10 sm:mt-0 sm:ml-10 sm:border-l-2 sm:pl-10">

        <button type="button"
                class="mb-6 ml-auto mr-2 px-5 py-4 text-white text-1xl rounded-xl border-black bg-brightred
                          hover:shadow-xl hover:text-xl hover-zoom hidden sm:block"
                @click="deleteTeam"
        >
          <i class="fas fa-trash-alt"></i> DELETE TEAM
        </button>

        <ul id="members" class="flex flex-col font-semibold text-lg">
          <b class="font-bold"> Members: &nbsp;</b>
          <li class="mr-2"
              v-bind:key=username v-for="username in this.memberNames">
            {{ username }}
          </li>
        </ul>

        <br>

        <ul id="requesters" class="flex flex-col font-semibold text-lg">
          <b class="font-bold"> Join requests: &nbsp;</b>
          <li class="flex justify-between my-1"
              :key=user.id
              v-for="user in this.requesters">
            <span class="">{{ user.username }}</span>

            <div class="ml-2">
              <button class="border-black bg-brightgreen w-7
                            rounded font-semibold text-lg hover:shadow-xl hover-zoom"
                      @click="accept(user.id)">
                <i class="fas fa-check"></i>
              </button>
              <button class="border-black bg-brightred w-7 ml-5
                            rounded font-semibold text-lg hover:shadow-xl hover-zoom"
                      @click="reject(user.id)">
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </li>
        </ul>
      </div>


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

  computed: {
    requesters() {
      return TeamsController.getJoinRequesters(this.teamId);
    },

    memberNames() {
      return this.team.members.map(a => a.username);
    },
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

    checkForm() {
      this.errors.member = !this.input.member;

      if (!this.errors.member) {
        this.addMember();
      }
    },

    accept(userId) {
      TeamsController.acceptJoinRequest(this.teamId, userId);
      this.loadTeam();
    },

    reject(userId) {
      TeamsController.rejectJoinRequest(this.teamId, userId);
    },
    deleteTeam() {
      TeamsController.deleteTeam(this.teamId);
      router.back()
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