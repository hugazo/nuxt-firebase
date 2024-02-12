<script setup lang="ts">
import NavigatorStore from '@/stores/navigator';

// Define options for all nested pages
definePageMeta({
  middleware: [
    'auth',
    'admin',
  ],
  layout: 'admin',
});

// Get matched routes
const adminPages = useRoute().matched
  // Get all children routes
  .map((route) => route.children).flat()
  // Filter only routes that should be seen in navigator
  .filter((route) => route.meta?.includeInNavigator);

// Use navigator store
const { showNavigator } = storeToRefs(NavigatorStore());
</script>

<template>
  <div
    v-if="adminPages"
    class="d-flex flex-row h-100%"
  >
    <v-tabs
      v-show="showNavigator"
      direction="vertical"
    >
      <v-tab
        v-for="page in adminPages"
        :key="page.path"
      >
        {{ page.name }}
      </v-tab>
    </v-tabs>
    <v-window>
      <NuxtPage />
    </v-window>
  </div>
</template>
