<template>
  <div class="w-full">
      <div class="w-full">
        <nav-bar-component></nav-bar-component>
      </div>
      <div>
        <router-view />
      </div>
  </div>
</template>

<script>

import NavBarComponent from "@/components/NavBarComponent";
export default {
  name: 'App',
  components: {NavBarComponent},
}

</script>

<style>
</style>
