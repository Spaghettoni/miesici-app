<template>
  <nav-bar-component></nav-bar-component>
  <router-view />
</template>

<script>

import NavBarComponent from "@/components/NavBarComponent";
export default {
  name: 'App',
  components: {NavBarComponent},
  props: {
    title: String,
    isBold: Boolean,
  },
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
