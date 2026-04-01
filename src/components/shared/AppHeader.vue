<script setup>
import { ref } from "vue";
import { Menu, Search } from "lucide-vue-next";
import PageTitle from "./PageTitle.vue";
import UserMenu from "./UserMenu.vue";

defineEmits(["toggle-sidebar"]);

const searchQuery = ref("");
</script>

<template>
  <header class="w-full border-b border-zinc-200 bg-white shadow-sm">
    <div
      class="flex flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between"
    >
      <div class="flex w-full items-start gap-3 lg:w-auto lg:items-center">
        <button
          class="rounded-xl border border-zinc-200 p-2 text-zinc-700 lg:hidden"
          @click="$emit('toggle-sidebar')"
        >
          <Menu class="h-5 w-5" />
        </button>

        <PageTitle title="Dashboard" subTitle="Welcome to your dashboard" />
      </div>

      <div class="flex w-full flex-col gap-4 sm:flex-row sm:items-center lg:w-auto">
        <div class="w-full lg:min-w-[20rem] lg:max-w-md">
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

        <div class="self-end sm:self-auto">
          <UserMenu />
        </div>
      </div>
    </div>
  </header>
</template>
