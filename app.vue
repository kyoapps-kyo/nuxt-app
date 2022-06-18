<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - KYOAPPS` : "KYOAPPS";
  },
});
</script>
