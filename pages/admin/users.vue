<template>
  <div>
    <template v-if="queryResult">
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
    const { data } = await httpsCallable(functions, 'User-getAllUsers')();
    return data as ListUsersResult;
  } catch (error) {
    return [];
  }
});
</script>
