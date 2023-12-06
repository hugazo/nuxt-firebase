<template>
  <v-btn @click="logout">
    Sign out
  </v-btn>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth';

const logout = () => {
  const auth = getAuth();
  signOut(auth);
};
</script>
