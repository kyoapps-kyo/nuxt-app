import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
    viewer: false,
    config: {
      content: ["content/**/**.md"],
      plugins: [require("@tailwindcss/typography"), require("daisyui")],
    },
  },
  css: ["@/assets/css/app.css"],
});
