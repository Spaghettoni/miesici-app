<template>
  <div class="w-full flex justify-center">
    <div class="mt-10 p-4 flex flex-col w-full max-w-2xl border-2">
      <div>
        <h1 class="mb-4 font-semibold text-6xl">
          Team detail
        </h1>
      </div>
      <div class="flex flex-col">
        <div class="flex">
          <div class="text-lg underline italic">
            Team name:
          </div>
          <h1 class="ml-5 text-lg font-semibold">
            {{ this.teamName }}
          </h1>
        </div>
        <div class="flex">
          <div class="text-lg underline italic">
            Members:
          </div>
          <div class="ml-9 font-semibold text-lg"
               v-bind:key=member v-for="member in this.members">
            {{ member }}
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
            <button class="h-full w-full px-4">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamDetailComponent",
  props: {
    teamName: String,
    members: Array,
  },
  data() {
    return {
      input: {
        member: '',
      }
    }
  },
  mounted() {
    console.log(
        'members:',
        this.members,
    )
  }
}
</script>

<style scoped>

</style>