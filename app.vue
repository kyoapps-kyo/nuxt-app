<template>
  <NuxtLayout name="costom">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - KYOAPPS` : "KYOAPPS";
  },
});
</script>
