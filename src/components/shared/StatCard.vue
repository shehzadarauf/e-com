<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number],
    default: "",
  },
  trend: {
    type: String,
    default: "",
  },
  trendType: {
    type: String,
    default: "positive", // or "negative"
  },
  icon: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="p-4 rounded  border bg-white/90 shadow-[0_20px_60px_-20px_rgba(24,24,27,0.45)]"
  >
    <div class="flex items-center justify-between mb-2">
      <p class="text-lg font-semibold">{{ title }}</p>
      <div
        class="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 text-base"
       v-if="icon">
        {{ icon }}
      </div>
    </div>

    <p class="text-2xl font-bold">{{ value }}</p>
    <p
      class="text-sm"
      :class="{
        'text-green-500': trendType === 'positive',
        'text-red-500': trendType === 'negative',
      }"
    v-if="trend">
      {{ trend }}
    </p>
  </div>
</template>
