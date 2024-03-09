<template>
  <v-card-item class="text-center">
    <div class="text-subtitle-1 text-medium-emphasis">
      Account
    </div>
    <v-text-field
      v-model="email"
      density="compact"
      placeholder="Email address"
      prepend-inner-icon="mdi-email-outline"
      variant="outlined"
      @enter.prevent="sendEmail"
    />
    <v-btn
      prepend-icon="mdi-auto-fix"
      @click.prevent="sendEmail"
    >
      Send me a Magic Link
    </v-btn>
  </v-card-item>
</template>

<script setup lang="ts">
const { sendEmailLink } = useAuth();
const email = ref('');

const sendEmail = async () => {
  await sendEmailLink(email.value);
  email.value = '';
};
</script>
