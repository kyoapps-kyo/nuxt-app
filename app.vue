<template>
  <div>
    <!-- This page correctly has only one single root element -->
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - KYOAPPS` : "KYOAPPS";
  },
});
</script>
