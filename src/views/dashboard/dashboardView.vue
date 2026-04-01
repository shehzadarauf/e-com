<script setup>
import AppHeader from "@/components/shared/AppHeader.vue";
import StatCard from "@/components/shared/StatCard.vue";
import AppSidebar from "@/components/shared/AppSidebar.vue";

</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader />
    <div class="flex">
      <AppSidebar />  
      <main class="flex-1 p-6">
        

        <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
          <StatCard title="Total Sales" value="$12,345"  icon="💰"/>
          <StatCard title="New Customers" value="123"  icon="👥"/>
          <StatCard title="Orders" value="456"  icon="📦"/>
          <StatCard title="Revenue" value="$78,901"  icon="📊"/>
        </div>
      </main>
    </div>
  </div>
</template>
