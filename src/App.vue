<template>
  <div class="w-full">
      <div class="w-full">
        <nav-bar-component></nav-bar-component>
      </div>
      <div class="z-0">
        <router-view />
      </div>
    <div class="w-full">
      <footer-component></footer-component>
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
