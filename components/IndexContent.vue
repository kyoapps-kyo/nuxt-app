<template>
  <div class="relative max-w-5xl mx-auto">
    <img
      :src="`/assets/images/repo-editor-glow-${color.preference}.svg`"
      class="absolute -z-10 top-0 transition-opacity delay-1000 duration-1000"
      style="width: 117.31%; margin: 0 -8.65%; transform: translateY(-20%)"
      alt="Light glowing behind the editor"
      decoding="async"
      :class="{ 'opacity-0': !show }"
    />
    <div
      class="backdrop-blur-md bg-opacity-90 bg-base-100 rounded-t-2xl transition-all duration-500 transform py-10 md:py-20"
      :class="{
        'opacity-0': !show,
        'scale-90': !show,
        'translate-y-[30vh]': !show,
        'translate-y-0': show,
      }"
    >
      <div
        class="max-w-2xl mx-auto w-full flex items-center justify-between px-6 md:px-0"
      >
        <p class="text-xl leading-tight tracking-tight">
          <strong class="text-3xl text-gradient"> Wu Yang </strong><br />
          Digital Craftsman ( Developer / Designer )
        </p>
        <div class="avatar">
          <div
            class="w-24 rounded-full ring ring-[#2188ff] dark:ring-[#64acff] overflow-hidden bg-gradient-to-br from-[#db469f] to-[#2188ff] dark:from-[#a2facf] dark:to-[#64acff]"
          >
            <img src="/assets/images/avatar.png" />
          </div>
        </div>
      </div>
      <div class="max-w-2xl mx-auto w-full px-6 md:px-0 mb-6">
        <h3 class="text-xl font-bold leading-[1.2] my-6">
          <span class="border-b-4 pb-1">{{ $t("work") }} / Work</span>
        </h3>
        <p class="text-xl indent-8 text-justify">
          <span class="text-gradient">{{ $t("author") }}</span>
          ，{{ $t("authorContent") }}
        </p>
        <p class="text-xl indent-8 mt-2 md:mt-4 text-justify">
          <span class="text-gradient">{{ $t("appTitle") }}</span>
          ，{{ $t("appContent") }}
        </p>
        <div class="flex items-center justify-center mt-6">
          <NuxtLink
            class="py-2 px-4 rounded-lg border border-[#c47cde] dark:border-[#91ebc0] inline-flex items-center hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] dark:hover:from-[#a2facf] dark:hover:to-[#64acff] hover:text-white"
            >My Profile
            <Icon
              icon="ep:arrow-right"
              width="14"
              height="14"
              :inline="true"
              class="ml-4"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="max-w-2xl mx-auto w-full px-6 md:px-0 mb-6">
        <h3 class="text-xl font-bold leading-[1.2] my-6">
          <span class="border-b-4 pb-1">{{ $t("bio") }} / Bio</span>
        </h3>
        <div class="flex items-start text-xl">
          <p class="font-bold mr-12">1991</p>
          <p>Born in Hunan, CHINA</p>
        </div>
        <div class="flex items-start text-xl">
          <p class="font-bold mr-12">2018</p>
          <p class="text-justify">
            Completed the Master's Program in the Graduate School of Information
            Science at Kyoto Institute of Science and Technology
          </p>
        </div>
        <div class="flex items-start text-xl">
          <p class="font-bold mr-12">2019</p>
          <p>Working as a freelancer</p>
        </div>
      </div>
      <div class="max-w-2xl mx-auto w-full px-6 md:px-0 mb-6">
        <h3 class="text-xl font-bold leading-[1.2] my-6">
          <span class="border-b-4 pb-1">{{ $t("favorite") }} / I ♥</span>
        </h3>
        <p class="text-xl indent-8">健身、音乐、蓝调口琴、摄影、料理</p>
      </div>
      <div class="max-w-2xl mx-auto w-full px-6 md:px-0 mb-6">
        <h3 class="text-xl font-bold leading-[1.2] my-6">
          <span class="border-b-4 pb-1">{{ $t("where") }} / Where</span>
        </h3>
        <ul class="pl-6">
          <li
            class="hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] hover:text-white hover:cursor-pointer rounded-lg w-fit p-2 mt-2"
          >
            <a
              href="https://github.com/kyoapps-kyo"
              class="flex font-bold text-lg"
            >
              <Icon
                icon="ant-design:github-filled"
                width="24"
                height="24"
                class="mr-2"
              />
              @kyoapps-kyo
            </a>
          </li>
        </ul>
      </div>
      <div class="flex items-center justify-center mt-6">
        <NuxtLink
          class="py-2 px-4 rounded-lg border border-[#c47cde] dark:border-[#91ebc0] inline-flex items-center hover:bg-gradient-to-br hover:from-[#db469f] hover:to-[#2188ff] dark:hover:from-[#a2facf] dark:hover:to-[#64acff] hover:text-white"
          >More popular posts
          <Icon
            icon="ep:arrow-right"
            width="14"
            height="14"
            :inline="true"
            class="ml-4"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue";
const show = ref(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, 500);
});
const color = useColorMode();
</script>
