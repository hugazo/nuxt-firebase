<template>
  <v-btn
    prepend-icon="mdi-facebook"
    @click="signInWithFacebook"
  >
    Login with Facebook
  </v-btn>
</template>

<script setup lang="ts">
const { signInWithFacebook } = useAuth();
</script>
