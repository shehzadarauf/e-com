<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  size: {
    type: String,
    default: "md",
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const variantClasses = {
  primary: "bg-black text-white hover:bg-black/90",
  secondary: "bg-white text-black border border-zinc-300 hover:bg-zinc-50",
  ghost: "bg-transparent text-zinc-700 hover:bg-zinc-100",
};

const sizeClasses = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

const buttonClasses = computed(() => {
  const variant = variantClasses[props.variant] || variantClasses.primary;
  const size = sizeClasses[props.size] || sizeClasses.md;

  return [
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition disabled:opacity-60 disabled:cursor-not-allowed",
    variant,
    size,
    props.block ? "w-full" : "",
  ].join(" ");
});
</script>

<template>
  <button :type="type" :class="buttonClasses" :disabled="disabled || loading">
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
    />
    <slot />
  </button>
</template>
