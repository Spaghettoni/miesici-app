<template>
  <div class="w-full">
      <header class="w-full">
        <nav-bar-component></nav-bar-component>
      </header>
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
body {
  font-family: "Segoe UI", "Roboto", "Tahoma", sans-serif;
}
</style>
