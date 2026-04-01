# Recent Orders Section Plan and Instructions

## Purpose
Build a Recent Orders section for the dashboard so users can quickly see the latest customer orders in one place.

## What Recent Orders Should Show
- Section title
- A list of recent orders
- Order ID
- Customer name
- Order status
- Total amount

## Data to Start With
You can begin with a simple array inside `DashboardView.vue`:
- id
- customer
- status
- total

Example order data:
- `#1001`, Ali Khan, Pending, `$120`
- `#1002`, Sara Ahmed, Completed, `$250`
- `#1003`, John Doe, Shipped, `$180`

## Build Steps
1. Open `DashboardView.vue`.
2. Create a simple `orders` array in `<script setup>`.
3. Add a new section below the StatCard grid.
4. Add a heading like `Recent Orders`.
5. Use `v-for` to render each order from the array.
6. Show order data in a clean row layout.
7. Add spacing, border, and background so the section looks like a dashboard card.
8. Optionally color the order status differently later.

## Suggested Tailwind Style
- Section wrapper: `mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm`
- Title: `text-xl font-bold text-zinc-900`
- Orders wrapper: `mt-4 space-y-4`
- Order row: `flex items-center justify-between rounded-xl border border-zinc-100 p-4`
- Customer text: `text-sm text-zinc-500`
- Total text: `font-medium text-zinc-900`

## Basic Structure Idea
The section can have:
- Section title at the top
- Order rows below

Each order row can contain:
- left: order ID and customer name
- middle: status
- right: total amount

## Usage Example in Dashboard
Place the Recent Orders section below the StatCard grid.

Suggested order of dashboard content:
1. AppHeader
2. Stat cards
3. Recent Orders

## Testing Checklist
- Section shows below the stat cards.
- All orders render correctly using `v-for`.
- Rows have enough spacing.
- Layout stays readable on desktop.
- Text does not look crowded.

## Next Step After Recent Orders
After this section is done:
1. Add status colors like Pending, Completed, Shipped.
2. Add a sales chart section.
3. Add recent activity or top products.
