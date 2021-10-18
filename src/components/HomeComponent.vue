<template>
  <div class="border-black pt-20">
    <div class="flex justify-end">
      <div class="mx-auto">
      <img
           alt="" v-bind:src="'/pictures/landing.png'">
      </div>
      <div class="px-36 py-14 border-l-2 border-gray-light">
        <h2 class="text-8xl font-bold underline">Meet and play!</h2>
        <div class="flex justify-between mt-12 text-3xl font-semibold">
          <div class="px-10 py-12 border-2 hover:bg-orange">
            <p>Create your team!</p>
          </div>
          <div class="px-10 py-12 border-2 hover:bg-orange">
            <p>Create events!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent"
}
</script>

<style scoped>

</style>