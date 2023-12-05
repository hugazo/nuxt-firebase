<template>
  <div class="w-100 h-100 flex-column d-flex align-center justify-center">
    <h1 class="py-4">
      Home page
    </h1>
    <p>
      {{ message }}
    </p>
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
</script>
