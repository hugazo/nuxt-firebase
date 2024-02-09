<template>
  <v-btn
    :prepend-icon="currentTheme.icon"
    @click="changeTheme"
  >
    {{ currentTheme.name }}
  </v-btn>
</template>

<script setup lang="ts">
const { currentTheme, changeTheme } = useAppTheme();
</script>
