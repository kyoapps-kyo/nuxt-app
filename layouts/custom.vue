<template>
  <div>
    <!-- Navbar -->
    <div
      class="navbar fixed top-0 w-full z-50 transition duration-500 py-0 pt-6 md:pt-6"
      :class="{
        'backdrop-blur-sm': scrollChange,
        'bg-opacity-10': scrollChange,
        'bg-base-100': scrollChange,
        shadow: scrollChange,
      }"
    >
      <div
        class="navbar max-w-5xl mx-auto flex items-center justify-between px-8 md:px-0 py-0 md:py-0"
      >
        <AppLogo />
        <div
          class="hidden md:inline-flex md:items-center md:justify-end md:space-x-10"
        >
          <Navigation class="text-lg font-bold" :horizontal="true" />
          <ColorSwap />
          <LangSwitch />
        </div>
        <div class="dropdown dropdown-end md:hidden">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content mt-3 p-2 shadow bg-base-100 bg-opacity-90 rounded-box w-64"
          >
            <Navigation
              class="text-lg font-bold items-end"
              :horizontal="false"
            />
            <div class="flex flex-col items-end mt-4 space-y-4 pr-4">
              <ColorSwap />
              <LangSwitch />
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!-- Page content here -->
    <main>
      <slot :changeColor="changeColor" :scrollY="scrollY" />
    </main>
    <!-- footer -->
    <Footer />
  </div>
</template>
<script lang="ts" setup>
import LangSwitch from "@/components/LanguageInput.vue";
import ColorSwap from "@/components/ColorSwap.vue";
import Navigation from "@/components/Navigation.vue";
import AppLogo from "@/components/AppLogo.vue";
import Footer from "@/components/Footer.vue";

const changeColor = ref(false);
const color = useColorMode();
const newColor = computed(() => color.value);
watch(newColor, (newVal, oldVal) => {
  if (newVal != oldVal) {
    changeColor.value = true;
    setTimeout(() => {
      changeColor.value = false;
    }, 100);
  }
});

const scrollChange = ref(false);
const scrollY = ref(0);

const scrollHandle = useThrottle((e) => {
  scrollY.value = e.target.scrollingElement.scrollTop;
}, 16);
onMounted(() => {
  window.addEventListener("scroll", scrollHandle);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandle);
});
watch(scrollY, (newVal) => {
  if (newVal > 10) {
    scrollChange.value = true;
  } else scrollChange.value = false;
});
</script>
