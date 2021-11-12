<template>
  <div class="w-full">
      <div class="w-full">
        <nav-bar-component></nav-bar-component>
      </div>
      <div class="z-0">
        <router-view />
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}

</script>

<style>
</style>
