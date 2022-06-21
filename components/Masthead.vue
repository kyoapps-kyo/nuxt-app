<template>
  <div
    ref="refContainer"
    class="h-screen w-full sticky top-0 flex flex-col justify-start items-center -z-10"
    :style="`transform: translateY(${-progress * 20}vh);`"
  >
    <img
      class="absolute w-full h-[120vh] object-cover -z-10 transition-all duration-300"
      :src="`/assets/images/masthead-bg-${color.preference}.jpg`"
      :class="{ 'opacity-100': show, 'opacity-0': !show }"
    />
    <div class="h-[25vh] md:h-[27vh]"></div>
    <div
      class="text-4xl md:text-7xl font-bold text-gradient transition-all duration-500 opacity-0 mb-6 md:mb-20 text-center JXZK"
      :class="{ 'opacity-100': show }"
    >
      {{ $t("appTitle") }}&nbsp;<span class="hidden md:inline">-</span
      ><br class="md:hidden" />
      <span class="text-lg md:text-7xl LXGWWenKai"
        >&nbsp;{{ $t("appDescription") }}</span
      >
    </div>
    <VueWriter
      class="text-2xl font-bold md:text-5xl text-gradient LXGWWenKai"
      :array="arr"
      :typeSpeed="120"
      :eraseSpeed="30"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  scrollY: Number,
});
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

const show = ref(false);

const refContainer = ref(null);
const progress = ref(0);

watchEffect(() => {
  if (refContainer.value) {
    progress.value = Math.min(
      1,
      props.scrollY / refContainer.value.clientHeight
    );
  }
});

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 100);
});
</script>
