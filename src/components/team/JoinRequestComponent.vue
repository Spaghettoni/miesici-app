<template>
  <div class="flex flex-col">
    <div class="px-4 py-2 flex items-center border-black bg-orange
                    rounded-xl cursor-pointer hover:shadow-xl hover-zoom"
          @click="this.sendRequest()">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
        <span class="ml-2 font-semibold text-lg">
          Send join request
        </span>
    </div>

    <select v-model="input.team" id="team" name="team" @change="saveTeamIdOnChange($event)"
            class="border text-2xl rounded-xl bg-white">
      <option v-for="option in this.allTeams" v-bind:value="option.id" v-bind:key="option">
          {{ option.name }}
      </option>
    </select>

    <span class="text-darkgreen" v-if="this.requestSent === true">
       Request sent!
    </span>
    <span class="text-brightred" v-if="this.errorMsg !== ''">
       {{this.errorMsg}}
    </span>
  </div>
</template>
<script>
import TeamsController from "../../controllers/TeamsController";

export default {
  name: 'JoinRequest',
   data() {
    return {
      allTeams: null,
      errorMsg: '',
      requestSent: false,
      input: {
        selectedTeamId: null
      }
    }
  },
  methods: {
    saveTeamIdOnChange(e) {
      const teamId = e.target.value;
      this.input.selectedTeamId = teamId;
      
    },
    sendRequest(){
      this.errorMsg = "";
      this.requestSent = false;
      try{
        TeamsController.createJoinRequest(this.input.selectedTeamId);
        this.requestSent = true;
      }
      catch(e){
          this.errorMsg = e.message;
      }
    }
  },
  mounted(){
    this.allTeams = TeamsController.getAllTeams();
  }
}
</script>