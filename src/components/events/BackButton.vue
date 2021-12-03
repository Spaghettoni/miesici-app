<template>
  <div
      class="mb-6 cursor-pointer font-semibold hover:text-white hover:bg-black px-5 py-3 border max-w-min rounded-xl flex items-center"
      @click="goBack"
  >
    <i class="fas fa-solid fa-arrow-left mr-2"></i> Back
  </div>
</template>
<script>

import router from "@/router";

export default {
  name: 'BackButton',
  methods: {
    goBack() {
      router.back()
    }
  }
}
</script>
