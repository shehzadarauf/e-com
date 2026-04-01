<script setup>
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
  <aside class="w-64 min-h-screen border-r border-zinc-200 bg-white shadow p-4">
    <div
      class="mb-8 rounded-lg border bg-zinc-100 p-4 text-center shadow-[0_20px_60px_-20px_rgba(24,24,27,0.45)]"
    >
      <h2 class="text-xl font-bold text-zinc-700">Admin</h2>
      <p class="mt-1 text-sm text-zinc-500">Control Panel</p>
    </div>

    <nav class="space-y-2">
      <a
        v-for="item in menuItems"
        :key="item"
        href="#"
        class="block px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-200"
        :class="
          item === 'Dashboard' ? 'bg-zinc-00 text-white hover:bg-zinc-900' : ''
        "
      >
        {{ item.icon }} <span class="ml-2">{{ item.label }}</span>
      </a>
    </nav>
  </aside>
</template>
