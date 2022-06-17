<template>
  <div class="w-full">
    <div class="container mx-auto break-all">
      <p class="text-orange-pink text-9xl font-bold">hahahahhahahah</p>
      <p class="text-gradient-pink-blue text-9xl font-bold">hahahah</p>
      <p class="text-gradient-mint-blue-dark text-9xl font-bold">hahahah</p>
      <p class="text-9xl font-bold">hahahah</p>
      <p class="text-9xl font-bold">hahahah</p>
      <p class="text-9xl font-bold">hahahah</p>
      <p class="text-9xl font-bold">hahahah</p>
      <p class="text-9xl font-bold">{{ $t("message") }}</p>
      <LangSwitch />
      <ColorSwap />
      <Navigation />
    </div>
  </div>
</template>
<script lang="ts" setup>
import LangSwitch from "@/components/LanguageInput.vue";
import ColorSwap from "@/components/ColorSwap.vue";
import Navigation from "@/components/Navigation.vue";
useHead({
  title: "HOME",
  meta: [{ name: "description", content: "ウェブアプリを開発" }],
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1",
});
</script>
