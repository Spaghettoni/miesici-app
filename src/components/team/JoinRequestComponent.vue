<template>
  <div class="flex flex-col relative">
    <div class="px-4 py-2 flex items-center border-black bg-orange
                    rounded-xl cursor-pointer hover:shadow-xl hover-zoom"
         @click="this.sendRequest()">
      <i class="fa fa-paper-plane" aria-hidden="true"></i>
      <span class="ml-2 font-semibold text-lg">
          Send join request
        </span>
    </div>

    <!-- <select v-model="input.team" id="team" name="team" @change="saveTeamIdOnChange($event)"
            class="border text-2xl rounded-xl bg-white">
      <option v-for="option in this.teams" v-bind:value="option.id" v-bind:key="option">
          {{ option.name }}
      </option>
    </select> -->

    <input
        type="text"
        id="search"
        autocomplete="off"
        v-model="this.input.searchTerm"
        placeholder="Team name"
        class="border rounded py-1 px-2 mt-2"
        @input="show"
    >
    <ul
        v-if="this.filteredTeams().length && this.showTeams === true"
        class="w-full rounded bg-white border border-gray-300 py-1 space-y-1 absolute z-10 top-20"
    >
      <li
          v-for="team in filteredTeams()"
          :key="team.id"
          @click="selectTeam(team)"
          class="cursor-pointer hover:bg-gray-100 p-1 hover:bg-gray-light hover-zoom rounded"
      >
        {{ team.name }}
      </li>
    </ul>

    <transition name="fade">
      <span class="text-darkgreen" v-if="this.requestSent === true">
         Request sent!
      </span>
    </transition>
    <transition name="fade">
    <span class="text-brightred" v-if="this.errorMsg !== ''">
       {{ this.errorMsg }}
    </span>
    </transition>
  </div>
</template>
<script>
import TeamsController from "../../controllers/TeamsController";

export default {
  name: 'JoinRequest',

  data() {
    return {
      errorMsg: '',
      requestSent: false,
      showTeams: false,
      input: {
        selectedTeamId: null,
        searchTerm: ''
      }
    }
  },

  computed: {
    teams() {
      return TeamsController.getTeamsToJoin();
    }
  },

  methods: {
    saveTeamIdOnChange(e) {
      const teamId = e.target.value;
      this.input.selectedTeamId = teamId;
    },

    filteredTeams() {
      if (this.input.searchTerm === '') {
        return [];
      }
      return this.teams.filter((team) => {
        return team.name.toLowerCase().includes(this.input.searchTerm.toLowerCase());
      })
    },

    show() {
      this.showTeams = true;
    },

    dontShow() {
      this.showTeams = false;
    },

    selectTeam(team) {
      this.input.selectedTeamId = team.id;
      this.input.searchTerm = team.name;
      this.showTeams = false;
    },

    sendRequest() {
      this.input.searchTerm = '';
      this.errorMsg = "";
      this.requestSent = false;
      try {
        TeamsController.createJoinRequest(this.input.selectedTeamId);
        this.requestSent = true;
      } catch (e) {
        this.errorMsg = e.message;
      }
    },
  }
}
</script>