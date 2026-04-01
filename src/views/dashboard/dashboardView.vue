<script setup>
import { ref } from "vue";
import AppHeader from "@/components/shared/AppHeader.vue";
import AppSidebar from "@/components/shared/AppSidebar.vue";
import StatCard from "@/components/shared/StatCard.vue";

const recentOrders = [
  {
    id: "#1234",
    customer: "John Doe",
    date: "2024-06-01",
    total: "$99.99",
    status: "Shipped",
  },
  {
    id: "#1235",
    customer: "Jane Smith",
    date: "2024-06-02",
    total: "$149.99",
    status: "Processing",
  },
  {
    id: "#1236",
    customer: "Bob Johnson",
    date: "2024-06-03",
    total: "$79.99",
    status: "Delivered",
  },
  {
    id: "#1237",
    customer: "Alice Brown",
    date: "2024-06-04",
    total: "$199.99",
    status: "Pending",
  },
];

const topProducts = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    sales: 120,
    revenue: "$2,400",
    stock: "In Stock",
  },
  {
    name: "Running Shoes",
    category: "Fashion",
    sales: 95,
    revenue: "$1,900",
    stock: "Low Stock",
  },
  {
    name: "Smart Watch",
    category: "Accessories",
    sales: 80,
    revenue: "$1,600",
    stock: "In Stock",
  },
];

const isSidebarOpen = ref(false);
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <AppHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

    <div class="flex">

      <AppSidebar
        :is-sidebar-open="isSidebarOpen"
        @close="isSidebarOpen = false"
      />

      <main class="flex-1 p-4 sm:p-6">
        <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Sales" value="$12,345" icon="💰" />
          <StatCard title="New Customers" value="123" icon="👥" />
          <StatCard title="Orders" value="456" icon="📦" />
          <StatCard title="Revenue" value="$78,901" icon="📊" />
        </div>

        <div
          class="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <h2 class="text-xl font-bold text-zinc-900">Recent Orders</h2>

          <div class="mt-4 overflow-x-auto">
            <table class="w-full text-left">
              <thead>
                <tr class="border-b border-zinc-200 text-sm text-zinc-500">
                  <th class="pb-3">Order ID</th>
                  <th class="pb-3">Customer</th>
                  <th class="pb-3">Date</th>
                  <th class="pb-3">Total</th>
                  <th class="pb-3">Status</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="order in recentOrders"
                  :key="order.id"
                  class="border-b border-zinc-100"
                >
                  <td class="px-6 py-4">{{ order.id }}</td>
                  <td class="py-4">{{ order.customer }}</td>
                  <td class="py-4">{{ order.date }}</td>
                  <td class="py-4">{{ order.total }}</td>
                  <td class="py-4">
                    <span
                      :class="{
                        'bg-green-100 text-green-700':
                          order.status === 'Shipped',
                        'bg-yellow-100 text-yellow-700':
                          order.status === 'Processing',
                        'bg-blue-100 text-blue-700':
                          order.status === 'Delivered',
                        'bg-red-100 text-red-700': order.status === 'Pending',
                      }"
                      class="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                    >
                      {{ order.status }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          class="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <h2 class="text-lg font-bold text-zinc-900">Top Products</h2>

          <div class="mt-4 space-y-4">
            <div
              v-for="product in topProducts"
              :key="product.name"
              class="flex flex-col gap-3 rounded-xl border border-zinc-100 p-4 transition hover:bg-zinc-50 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p class="text-sm font-semibold text-zinc-900">
                  {{ product.name }}
                </p>
                <p class="text-xs text-zinc-500">{{ product.category }}</p>
              </div>

              <div class="text-sm text-zinc-600">{{ product.sales }} sales</div>
              <div class="font-medium text-zinc-900">{{ product.revenue }}</div>

              <span
                class="rounded-full px-3 py-3 text-xs font-medium"
                :class="
                  product.stock === 'In Stock'
                    ? 'bg-green-100 text-green-700'
                    : product.stock === 'Low Stock'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                "
              >
                {{ product.stock }}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
