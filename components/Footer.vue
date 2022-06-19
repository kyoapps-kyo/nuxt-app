<template>
  <footer
    class="w-full backdrop-blur-md bg-opacity-30 bg-base-100 py-10 md:pt-20 md:pb-8"
  >
    <div class="max-w-5xl flex flex-col justify-center mx-auto">
      <div class="flex items-center justify-center space-x-4">
        <AppLogo />
        <div class="text-gradient md:hidden text-2xl font-bold">KYOAPPS</div>
      </div>
      <SocialLink />
      <p class="text-center text-xs md:text-base">
        <NuxtLink
          to="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          class="underline"
        >
          京ICP备2022011418号</NuxtLink
        >
        © KYOAPPS all rights reserved (2021~) Design & Code by
        <NuxtLink
          to="https://weibo.com/7392086588"
          target="_blank"
          class="underline"
          >Wu Yang.</NuxtLink
        >
      </p>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import AppLogo from "@/components/AppLogo.vue";
import SocialLink from "@/components/SocialLink.vue";
</script>
