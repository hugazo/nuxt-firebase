<template>
  <v-btn @click="logout">
    Sign out
  </v-btn>
</template>

<script setup lang="ts">
const { logout } = useAuth();
</script>
