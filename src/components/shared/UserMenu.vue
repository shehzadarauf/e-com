<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "",
  },
  hasNotification: {
    type: Boolean,
    default: true,
  },

});

const isOpen = ref(false);

const displayName = computed(() => props.name || "Guest User");
const displayRole = computed(() => props.role || "Administrator");

const initials = computed(() => {
  return displayName.value.slice(0, 2).toUpperCase();
});
</script>

<template>
  <div class="flex items-center gap-3">
    <button
      type="button"
      class="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-50"
      aria-label="Notifications"
    >
      <span class="text-lg">🔔</span>
      <span
        v-if="hasNotification"
        class="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
      />
    </button>

    <div
      class="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-3 py-2 shadow-sm"
    >
       <button
        type="button"
        @click="isOpen = !isOpen"
        class="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-3 py-2 shadow-sm"
      >
      <img
        v-if="avatar"
        :src="avatar"
        :alt="displayName"
        class="h-10 w-10 rounded-full object-cover"
      />

      <div
        v-else
        class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700"
      >
        {{ initials }}
      </div>

      <div class="min-w-0">
        <p class="truncate text-sm font-semibold text-zinc-900">
          {{ displayName }}
        </p>
        <p class="truncate text-xs text-zinc-500">
          {{ email || displayRole }}
        </p>
      </div>
      </button>
   <div
  v-if="isOpen"
  class="absolute right-0 z-50 mt-4 w-48 rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg"
>
  <div class="space-y-1">
    <a
      href="#"
      class="block rounded-xl px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100"
    >
      Profile
    </a>
    <a
      href="#"
      class="block rounded-xl px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100"
    >
      Settings
    </a>
    <a
      href="#"
      class="block rounded-xl px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
    >
      Logout
    </a>
  </div>
</div>


    </div>
  </div>
</template>
