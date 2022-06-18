<template>
  <ul class="menu bg-base-100" :class="{ 'menu-horizontal': horizontal }">
    <li><NuxtLink to="/Works">作品 / Works</NuxtLink></li>
    <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
    <li><NuxtLink to="/posts">内容 / Posts</NuxtLink></li>
  </ul>
</template>
<script lang="ts" setup>
defineProps(["horizontal"]);
</script>
