<template>
  <NuxtLayout name="custom">
    <MastHead class="" :class="{ '-mb-96': false }" />
    <Content />
    <Footer />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import MastHead from "@/components/Masthead.vue";
import Content from "@/components/IndexContent.vue";
import Footer from "@/components/Footer.vue";

useHead({
  title: "HOME",
  meta: [{ name: "description", content: "ウェブアプリを開発" }],
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1",
});
definePageMeta({
  layout: false,
});
</script>
