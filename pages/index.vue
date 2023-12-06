<template>
  <div class="w-100 h-100 flex-column d-flex align-center justify-center">
    <h1 class="py-4">
      Home page
    </h1>
    <p>
      {{ message }}
    </p>
    <template v-if="user">
      <p>
        Logged as: {{ user.email }}
      </p>
      <AuthSignOutButton />
    </template>
    <template v-else>
      <AuthGoogleLoginButton />
    </template>
  </div>
</template>

<script setup lang="ts">
const hello = async () => {
  const { message } = await $fetch('/api/hello');
  return message;
};

const message = computedAsync(
  hello,
  'Loading message...',
);

const user = useCurrentUser();
</script>
