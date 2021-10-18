<template>
  <div id="nav" class="m-auto flex flex-col sm:px-0 sm:flex-row justify-end flex-wrap py-4 border-b-2 bg-white font-semibold">
    <router-link to="/login" class="mx-4 border-2 py-1 px-5 text-center hover:bg-orange">Login</router-link>
    <router-link to="/register" class="mx-4 border-2 py-1 px-5 text-center hover:bg-orange mr-10">Register</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBarComponent"
}
</script>

<style scoped>

</style>