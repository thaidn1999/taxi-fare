<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <div class="relative mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
      <div class="mt-10 space-y-24 pb-px">
        <div class="bg-white">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  overflow: hidden;
}
</style>
