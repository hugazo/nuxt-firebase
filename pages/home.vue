<template>
  <div class="w-100 h-100 flex-column d-flex align-center justify-center">
    <p>Hi, this is the home page</p>
    <v-btn @click="logout">
      Logout
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const { logout } = useLogout();

definePageMeta({
  title: 'Home',
  middleware: ['auth'],
  description: 'This is the home page',
});
</script>
