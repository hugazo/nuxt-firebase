<template>
  <div>
    <v-app-bar>
      <v-app-bar-title>Admin Site</v-app-bar-title>
      <v-spacer />
      <p class="text-body-1">
        Welcome {{ user?.displayName }}
      </p>
      <v-btn @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth';

const logout = () => {
  const auth = getAuth();
  signOut(auth);
  navigateTo('/');
};

const user = useCurrentUser();
</script>
