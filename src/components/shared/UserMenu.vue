<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { Bell } from "lucide-vue-next";

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
const menuRef = ref(null);

const displayName = computed(() => props.name || "Guest User");
const displayRole = computed(() => props.role || "Administrator");
const initials = computed(() => displayName.value.slice(0, 2).toUpperCase());

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  console.log("[UserMenu] toggle button clicked");
  console.log("[UserMenu] dropdown isOpen:", isOpen.value);
};

const closeMenu = (source) => {
  isOpen.value = false;
  console.log(`[UserMenu] dropdown closed from: ${source}`);
  console.log("[UserMenu] dropdown isOpen:", isOpen.value);
};

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    console.log("[UserMenu] clicked outside menu");
    closeMenu("outside click");
  } else {
    console.log("[UserMenu] clicked inside menu");
  }
};

onMounted(() => {
  console.log("[UserMenu] mounted");
  console.log("[UserMenu] document click listener added");
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  console.log("[UserMenu] before unmount");
  console.log("[UserMenu] document click listener removed");
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="flex items-center gap-3">
    <button
      type="button"
      class="relative flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:bg-zinc-50"
      aria-label="Notifications"
    >
      <Bell class="h-5 w-5" />
      <span
        v-if="hasNotification"
        class="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"
      />
    </button>
    <button class="lg:hidden" @click="$emit('toggle-sidebar')">
  Menu
</button>


    <div ref="menuRef" class="relative">
      <button
        type="button"
        @click="toggleMenu"
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

        <div class="min-w-0 text-left">
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
        class="absolute right-0  mt-3 w-48 rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg"
      >
        <div class="space-y-1">
          <a
            href="#"
            class="block rounded-xl px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100"
            @click="closeMenu('profile click')"
          >
            Profile
          </a>
          <a
            href="#"
            class="block rounded-xl px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100"
            @click="closeMenu('settings click')"
          >
            Settings
          </a>
          <a
            href="#"
            class="block rounded-xl px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
            @click="closeMenu('logout click')"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
