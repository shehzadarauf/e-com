<script setup>
import { ref } from "vue";
import { Search } from "lucide-vue-next";
import PageTitle from "./PageTitle.vue";
import UserMenu from "./UserMenu.vue";

const searchQuery = ref("");
</script>

<template>
  <header class="w-full border-b border-zinc-200 bg-white shadow-sm">
    <div class="flex items-center justify-between gap-6 px-6 py-5">
      <PageTitle title="Dashboard" subTitle="Welcome to your dashboard" />

      <div class="flex-1 max-w-md">
        <div
          class="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3"
        >
          <Search class="h-4 w-4 text-zinc-400" />

          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search..."
            class="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
          />
        </div>
      </div>

      <UserMenu />
    </div>
  </header>
</template>
