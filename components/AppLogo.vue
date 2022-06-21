<template>
  <NuxtLink class="inline-flex items-end justify-center" to="/">
    <img
      class="md:w-10 md:h-10 w-12 h-12 md:mr-6"
      :src="`/assets/images/logo-${color.preference}.png`"
      alt="KYOAPPS-LOGO"
    />
    <div class="hidden md:block md:text-2xl text-gradient JXZK">KYOAPPS</div>
  </NuxtLink>
</template>
<script lang="ts" setup>
const color = useColorMode();
</script>
<style scoped>
[data-theme="dark"] .active {
  border-bottom: none;
}
[data-theme="light"] .active {
  border-bottom: none;
}
</style>
