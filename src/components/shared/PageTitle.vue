<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="space-y-1 border p-4 rounded-lg text-center" >
    <h1 class="text-2xl font-bold">{{ title }}</h1>
    <p class="mt-1 text-sm text-zinc-500">{{ subTitle }}</p>
  </div>
</template>
