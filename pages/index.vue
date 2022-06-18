<template>
  <div>
    <NuxtLayout name="custom">
      <MastHead />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import MastHead from "@/components/Masthead.vue";

useHead({
  title: "HOME",
  meta: [{ name: "description", content: "ウェブアプリを開発" }],
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1",
});
definePageMeta({
  layout: false,
});
</script>
