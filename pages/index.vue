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
      <AuthEmailSignIn />
      <v-card-item class="text-center">
        <p class="text-subtitle-1">
          Or you can log in with
        </p>
        <v-btn-toggle>
          <AuthGoogleLoginButton />
          <AuthFacebookLoginButton />
        </v-btn-toggle>
      </v-card-item>
      <v-card-item class="text-center">
        <p class="py-2">
          Or you can turn the lights
        </p>
        <ThemeTogglerButton />
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    'magic-links',
    'no-auth',
  ],
});
</script>
