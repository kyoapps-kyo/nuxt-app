<template>
  <div
    ref="refContainer"
    class="h-screen w-full sticky top-0 flex flex-col justify-start items-center -z-10"
    :style="`transform: translateY(${-progress * 20}vh);`"
  >
    <img
      class="absolute w-full object-cover h-[115vh] md:h-[120vh] -z-10 transition-all duration-300"
      :src="`/assets/images/masthead-bg-${color.preference}.jpg`"
      :class="{ 'opacity-100': show, 'opacity-0': !show }"
    />
    <div class="h-[27vh] md:h-[30vh]"></div>
    <div
      class="text-4xl md:text-7xl font-bold text-gradient transition-all duration-500 opacity-0 mb-2 md:mb-20 text-center JXZK"
      :class="{ 'opacity-100': show }"
    >
      {{ $t("appTitle") }}<span class="hidden md:inline">&nbsp;-&nbsp;</span
      ><br class="md:hidden" />
      <span class="text-lg md:text-7xl LXGWWenKai">{{
        $t("appDescription")
      }}</span>
    </div>
    <VueWriter
      class="text-base font-bold md:text-5xl text-gradient LXGWWenKai"
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
// const progress = ref(0);

const progress = computed(() => {
  if (refContainer.value) {
    return Math.min(1, props.scrollY / refContainer.value.clientHeight);
  }
  return 0;
});

// const htmlHeight = ref("100vh");

// onBeforeMount(() => {
//   htmlHeight.value = document.body.offsetHeight + 1000 + "px";
// });

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 100);
});
</script>
