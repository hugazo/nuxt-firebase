<template>
  <v-btn
    prepend-icon="mdi-facebook"
    @click="signInWithFacebook"
  >
    Facebook
  </v-btn>
</template>

<script setup lang="ts">
const { signInWithFacebook } = useAuth();
</script>
