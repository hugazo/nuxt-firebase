<template>
  <v-btn
    prepend-icon="mdi-google"
    @click="signInWithGoogle"
  >
    Login with Google
  </v-btn>
</template>

<script lang="ts">

</script>

<script setup lang="ts">
const { signInWithGoogle } = useAuth();
</script>
