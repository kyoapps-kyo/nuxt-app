<template>
  <div
    class="flex justify-center items-center space-x-10 md:space-x-20 my-8 md:my-12"
  >
    <NuxtLink to="https://github.com/kyoapps-kyo" target="_blank"
      ><Icon icon="akar-icons:github-fill" class="w-6 h-6 md:h-10 md:w-10"
    /></NuxtLink>
    <NuxtLink to="https://weibo.com/7392086588" target="_blank"
      ><Icon icon="icomoon-free:sina-weibo" class="w-6 h-6 md:h-10 md:w-10"
    /></NuxtLink>
    <NuxtLink to="#" target="_blank"
      ><Icon icon="fa6-brands:bilibili" class="w-6 h-6 md:h-10 md:w-10"
    /></NuxtLink>
    <NuxtLink to="#" target="_blank"
      ><Icon icon="bi:youtube" class="w-6 h-6 md:h-10 md:w-10"
    /></NuxtLink>
    <NuxtLink to="#" target="_blank">
      <Icon icon="ant-design:instagram-filled" class="w-6 h-6 md:h-10 md:w-10"
    /></NuxtLink>
  </div>
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue";
</script>
