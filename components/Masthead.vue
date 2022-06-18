<template>
  <div class="h-screen w-full overflow-hidden">
    <div
      class="h-full w-full bg-fixed bg-no-repeat bg-cover flex flex-col justify-center items-start"
      :style="`background-image: url('/assets/images/masthead-bg-${color.preference}.jpg')`"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const color = useColorMode();
</script>
