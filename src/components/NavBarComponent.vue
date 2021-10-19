<template>
  <div id="nav" class="m-auto flex flex-col sm:px-0 sm:flex-row justify-center flex-wrap py-4 border-b-2">
    <router-link to="/" class="mx-4 border-2 py-1 px-2 text-center">Home</router-link>
    <router-link to="/not-found" class="mx-4 border-2 py-1 px-2 text-center">Not Found</router-link>
    <router-link to="/login" class="mx-4 border-2 py-1 px-2 text-center">Login</router-link>
    <router-link to="/register" class="mx-4 border-2 py-1 px-2 text-center">Registration</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBarComponent"
}
</script>

<style scoped>

</style>