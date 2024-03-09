<template>
  <pre>
    {{ props }}
  </pre>
  <v-btn @click="handleError">
    Clear Error
  </v-btn>
</template>

<script setup lang="ts">

import type { NuxtError } from '#app';

const props = defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object as () => NuxtError,
});

const params = useUrlSearchParams('history');

const handleError = () => {
  // If there is any errros in the URL, clear it
  Object.keys(params).forEach((key) => {
    params[key] = '';
  });
  clearError({ redirect: '/' });
};
</script>
