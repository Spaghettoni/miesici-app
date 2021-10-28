<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-2xl border-2">
      <div class="flex justify-between items-center">
        <h1 class="mb-4 font-semibold text-6xl">
          Create new team
        </h1>
      </div>
      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="teamName">Team name</label>
        <input type="text" id="teamName" name="teamName"
               v-model="input.teamName"
               placeholder="miesici"
               class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>
      <div class="mt-6 form-inputs flex flex-col">
        <label class="text-2xl" for="avatar">Team picture:</label>
        <input class="mt-2 " type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg">
      </div>
      <div class="mt-6 form-inputs  flex flex-col">
        <label class="text-2xl">Description</label>
        <textarea type="text"
                  v-model="input.description"
                  placeholder="Description"
                  class="px-4 py-2 text-4xl border-2 border-black"
        />
      </div>

      <button type="button"
              class="mt-12 mx-auto px-10 py-4 text-3xl border-2 border-black text-white bg-black
                      hover:bg-orange"
      >
        Create team
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateTeamComponent",
  data() {
    return {
      input: {
        teamName: '',
        description: '',
      }
    }
  }
}
</script>

<style scoped>

</style>