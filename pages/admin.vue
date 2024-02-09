<script setup lang="ts">
// Define options for all nested pages
definePageMeta({
  middleware: [
    'auth',
    'admin',
  ],
  layout: 'admin',
});
</script>

<template>
  <NuxtPage />
</template>
