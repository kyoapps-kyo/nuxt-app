<template>
  <select class="select select-info w-32" v-model="$i18n.locale">
    <option disabled selected>Select language</option>
    <option value="ja">日本語</option>
    <option value="cn">中文</option>
  </select>
</template>
<script lang="ts" setup>
const lang = ref("ja");
const instance = getCurrentInstance();
const proxy = computed(() => instance.proxy);
watch(
  () => proxy.value.$i18n.locale,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      lang.value = newVal;
    }
  }
);
useHead({
  htmlAttrs: {
    lang: lang,
  },
});
</script>
