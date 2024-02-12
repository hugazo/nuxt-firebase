<template>
  <div>
    <template v-if="queryResult.users">
      <v-data-table :items="queryResult.users" />
    </template>
    <p v-else>
      Loading...
    </p>
  </div>
</template>

<script setup lang="ts">
import type { ListUsersResult } from 'firebase-admin/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';

const queryResult = computedAsync(async () => {
  try {
    const functions = getFunctions();
    const functionReference = httpsCallable(functions, 'User-getAllUsers');
    const { data } = await functionReference();
    return data as ListUsersResult;
  } catch (error) {
    return {} as ListUsersResult;
  }
});

// Define if page shold be seen in navigator
definePageMeta({
  includeInNavigator: true,
});
</script>
