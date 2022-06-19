<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Navbar -->
      <div class="fixed top-0 w-full z-50">
        <div
          class="navbar max-w-5xl mx-auto flex items-center justify-between px-8 md:px-0 py-6 md:py-0"
        >
          <AppLogo />
          <div
            class="hidden md:inline-flex md:items-center md:justify-end md:space-x-10"
          >
            <Navigation class="text-lg font-bold" :horizontal="true" />
            <ColorSwap />
            <LangSwitch />
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      <!-- Page content here -->
      <main>
        <slot :changeColor="changeColor" />
      </main>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="overflow-y-auto w-80 bg-base-100 p-10">
        <Navigation class="text-lg font-bold items-end" :horizontal="false" />
        <div class="flex flex-col items-end mt-4 space-y-4 pr-4">
          <ColorSwap />
          <LangSwitch />
        </div>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import LangSwitch from "@/components/LanguageInput.vue";
import ColorSwap from "@/components/ColorSwap.vue";
import Navigation from "@/components/Navigation.vue";
import AppLogo from "@/components/AppLogo.vue";

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
</script>
