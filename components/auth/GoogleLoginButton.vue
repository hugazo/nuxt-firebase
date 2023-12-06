<template>
  <v-btn
    prepend-icon="mdi-google"
    @click="loginWithGoogle"
  >
    Login with Google
  </v-btn>
</template>

<script lang="ts">
import { GoogleAuthProvider, getAuth, signInWithRedirect } from 'firebase/auth';

export const googleAuthProvider = new GoogleAuthProvider();
</script>

<script setup lang="ts">
const loginWithGoogle = () => {
  const auth = getAuth();
  signInWithRedirect(auth, googleAuthProvider);
};
</script>
