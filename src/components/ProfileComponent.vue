<template>
<div>Profile</div>
</template>

<script>
import store from "../store";
import router from "../router";

export default {
  name: "ProfileComponent",

  methods: {
    async updateActive(target) {
      store.commit('setCurrentPath',target);
    },
  },
  mounted() {
    this.updateActive('/profile');
  }
}
</script>

<style scoped>

</style>