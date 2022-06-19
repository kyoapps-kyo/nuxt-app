import { defineNuxtPlugin } from "#app";
import VueWriter from "vue-writer";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueWriter);
});
