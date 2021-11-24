<template>
  <div class="border-black pt-20">
    <div class="flex flex-col-reverse sm:flex-row sm:justify-end">
      <div class="mx-auto">
        <img class="px-10" alt="" v-bind:src="'/pictures/landing.png'">
      </div>
      <div class="px-5 sm:px-10 border-l-2 border-gray-light">
        <h2 class="text-4xl sm:text-8xl font-bold z-0">
          Meet and play!
        </h2>

<!--        <div class="flex justify-between mt-12 text-3xl font-semibold">-->
<!--          <div class="px-10 py-12 border-2 cursor-pointer hover:bg-orange">-->
<!--            <p>Create your team!</p>-->
<!--          </div>-->
<!--          <div class="px-10 py-12 border-2 cursor-pointer hover:bg-orange">-->
<!--            <p>Create events!</p>-->
<!--          </div>-->
<!--        </div>-->

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