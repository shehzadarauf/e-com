<script setup>
defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const menuItems = [
  { label: "Dashboard", icon: "📊" },
  { label: "Products", icon: "🛍️" },
  { label: "Orders", icon: "📦" },
  { label: "Customers", icon: "👥" },
  { label: "Reports", icon: "📈" },
  { label: "Settings", icon: "⚙️" },
];
</script>

<template>
  <aside
    class="fixed left-0 top-0 z-50 h-full w-64 border-r border-zinc-200 bg-white p-4 transition-transform duration-300 lg:static lg:translate-x-0"
    :class="isSidebarOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <button
      class="mb-4 rounded-lg border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 lg:hidden"
      @click="emit('close')"
    >
      Close
    </button>

    <div
      class="mb-8 rounded-lg border bg-zinc-100 p-4 text-center shadow-[0_20px_60px_-20px_rgba(24,24,27,0.45)]"
    >
      <h2 class="text-xl font-bold text-zinc-700">Admin</h2>
      <p class="mt-1 text-sm text-zinc-500">Control Panel</p>
    </div>

    <nav class="space-y-2">
      <a
        v-for="item in menuItems"
        :key="item.label"
        href="#"
        class="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-200"
        :class="
          item.label === 'Dashboard'
            ? 'bg-zinc-900 text-white hover:bg-zinc-900'
            : ''
        "
      >
        {{ item.icon }}
        <span
          class="ml-2"
          :class="item.label === 'Dashboard' ? 'text-white' : 'text-zinc-700'"
        >
          {{ item.label }}
        </span>
      </a>
    </nav>
  </aside>
</template>
