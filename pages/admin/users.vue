<template>
  <div>
    <pre v-if="users">{{ users }}</pre>
    <p v-else>
      Loading...
    </p>
  </div>
</template>

<script setup lang="ts">
import { getFunctions, httpsCallable } from 'firebase/functions';

const users = computedAsync(async () => {
  const functions = getFunctions();
  const { data } = await httpsCallable(functions, 'User-getAllUsers')();
  return data;
});
</script>
