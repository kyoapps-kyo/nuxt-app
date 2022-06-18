<template>
  <div>
    <NuxtLayout name="custom">
      <div>x</div>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import LangSwitch from "@/components/LanguageInput.vue";
import ColorSwap from "@/components/ColorSwap.vue";
import Navigation from "@/components/Navigation.vue";
import AppLogo from "@/components/AppLogo.vue";
useHead({
  title: "HOME",
  meta: [{ name: "description", content: "ウェブアプリを開発" }],
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1",
});
definePageMeta({
  layout: false,
});
</script>
