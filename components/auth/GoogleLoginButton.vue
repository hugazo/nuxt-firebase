<template>
  <v-btn
    prepend-icon="mdi-google"
    @click="signInWithGoogle"
  >
    Login with Google
  </v-btn>
</template>

<script setup lang="ts">
const { signInWithGoogle } = useAuth();
</script>
