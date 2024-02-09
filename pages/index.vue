<template>
  <div class="w-100 h-100 flex-column d-flex align-center justify-center">
    <v-card
      class="w-100 m-sm-0 pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-text class="text-h5 text-center">
        Log-in
      </v-card-text>
      <!-- Uncomment this when implementing email magic login -->
      <!-- <div class="text-subtitle-1 text-medium-emphasis">
        Account
      </div>

      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      /> -->
      <v-card-text class="text-center">
        <AuthGoogleLoginButton />
        <AuthFacebookLoginButton />
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['no-auth'],
});

// Simple firebase auth spa handling
// const user = useCurrentUser();
</script>
