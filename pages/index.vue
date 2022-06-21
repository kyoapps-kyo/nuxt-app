<template>
  <NuxtLayout name="custom" v-slot="layoutProps">
    <MastHead :class="{ '-mb-[45vh]': true }" :scrollY="layoutProps.scrollY" />
    <Content />
  </NuxtLayout>
</template>
<script lang="ts" setup>
import MastHead from "@/components/Masthead.vue";
import Content from "@/components/IndexContent.vue";

useHead({
  title: "HOME",
  meta: [{ name: "description", content: "ウェブアプリを開発" }],
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1",
});
definePageMeta({
  layout: false,
});
</script>
