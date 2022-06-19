<template>
  <div class="h-screen w-full overflow-hidden">
    <div
      class="h-full w-full absolute bg-no-repeat bg-cover bg-center flex flex-col justify-start items-center -z-10"
      :style="`background-image: url('/assets/images/masthead-bg-${color.preference}.jpg');transform: translateY(-0px);`"
    >
      <div class="h-56 md:h-96"></div>
      <div
        class="text-3xl md:text-7xl font-bold text-gradient transition-all duration-100 mb-6 md:mb-20"
        v-html="$t('appTitle')"
      ></div>
      <VueWriter
        class="text-2xl font-bold md:text-5xl text-gradient LXGWWenKai"
        :array="arr"
        :typeSpeed="120"
        :eraseSpeed="30"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const arr = ref([
  "WEB APPS 開発, DONE IT",
  "構築、ディザイン、運用",
  "NUXT, VUE, NODEJS",
]);
const arr2 = [];
const instance = getCurrentInstance();

const proxy = computed(() => instance.proxy);
watch(
  () => proxy.value.$t("appDescription1"),
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      arr2.push(proxy.value.$t("appDescription1"));
      arr2.push(proxy.value.$t("appDescription2"));
      arr2.push(proxy.value.$t("appDescription3"));
      arr.value = arr2;
    }
  }
);
const color = useColorMode();
</script>
