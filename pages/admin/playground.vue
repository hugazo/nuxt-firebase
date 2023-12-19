<template>
  <div>
    <p v-if="pending">
      Loading...
    </p>
    <p v-else>
      {{ value?.message }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const { pending, data: value } = useLazyFetch('/api/hello', { server: false });
</script>
