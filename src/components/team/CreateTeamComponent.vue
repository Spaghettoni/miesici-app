<template>
  <form class="w-full flex justify-center">
    <div class="mt-10 px-4 flex flex-col w-full max-w-3xl">
      <back-button></back-button>
      <div class="flex justify-between items-center">
        <h1 class="mb-4 text-heading">
          Create new team
        </h1>
      </div>
      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="teamName">Team name</label>
        <input type="text" id="teamName" name="teamName"
               v-model="input.teamName"
               placeholder="miesici"
               required
               class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
        <b class="text-brightred font-semibold" :class="[this.errors.teamName ? 'block' : 'hidden']">
          <i class="fas fa-exclamation-triangle"></i>
          Please fill in team name!
        </b>
      </div>
      <!-- <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="avatar">Team picture:</label>
        <input class="mt-2 rounded" type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg">
      </div> -->
      <div class="mt-6 form-inputs  flex flex-col">
        <label class="text-2xl">Description</label>
        <textarea type="text"
                  v-model="input.description"
                  placeholder="Description"
                  class="px-4 py-2 text-4xl border-2 border-black rounded"
        />
      </div>

      <input type="submit"
              class="mt-12 mx-auto px-10 py-4 text-3xl border-black bg-orange rounded-xl
                    hover:shadow-xl hover:text-xl hover-zoom"
              @click="checkForm"
             value = "Create team"
      />

    </div>

  </form>
</template>

<script>
import router from "../../router";
import TeamsController from "../../controllers/TeamsController";

export default {
  name: "CreateTeamComponent",
  data() {
    return {
      input: {
        teamName: '',
        description: '',
      },
      errors:{
        teamName: false,
      }
    }
  },
  methods: {
    goBack() {
      router.back()
    },
    createTeam() {
      TeamsController.createTeam(this.input.teamName);
      router.push('/teams');
    },
    checkForm() {
      this.errors.teamName = !this.input.teamName;

      if (!this.errors.teamName) {
        this.createTeam(this.input.teamName);
      }
    }
  },
}
</script>

<style scoped>

</style>