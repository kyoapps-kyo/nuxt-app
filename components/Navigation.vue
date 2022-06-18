<template>
  <ul class="menu bg-base-100" :class="{ 'menu-horizontal': horizontal }">
    <li>
      <NuxtLink to="/Works">{{ $t("works") }}</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/posts">{{ $t("posts") }}</NuxtLink>
    </li>
    <li>
      <NuxtLink to="https://github.com/kyoapps-kyo/nuxt-app" target="_blank">{{
        $t("source")
      }}</NuxtLink>
    </li>
  </ul>
</template>
<script lang="ts" setup>
defineProps(["horizontal"]);
</script>
