<template>
  <div class="w-100 h-100 flex-column d-flex align-center justify-center">
    <h1 class="py-4">Home page</h1>
    <v-btn class="py-4" prepend-icon="$vuetify" @click="hi">
      Click me
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const hi = () => console.log('hi')
</script>
