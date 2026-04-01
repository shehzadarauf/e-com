# StatCard Component Plan and Instructions

## Purpose
Build a reusable StatCard component for dashboard metrics like revenue, orders, users, and conversion rate.

## What StatCard Should Show
- Title (example: Total Revenue)
- Main value (example: $24,500)
- Optional trend text (example: +12.4% from last month)
- Optional icon area

## Props to Add
Use these props in StatCard.vue:
- title: String
- value: String or Number
- trend: String (optional)
- trendType: String (optional, values: up, down, neutral)
- icon: String (optional, if you want emoji/text icon first)

## Build Steps
1. Open StatCard.vue and create script setup with defineProps.
2. Create a card wrapper with Tailwind classes (rounded, border, padding, shadow).
3. Show title in small muted text.
4. Show value in large bold text.
5. Add optional trend text under value.
6. Color trend by trendType:
   - up -> green
   - down -> red
   - neutral -> gray
7. Add optional icon area in top-right.
8. Keep spacing simple and consistent.

## Suggested Tailwind Style
- Wrapper: rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm
- Title: text-sm text-zinc-500
- Value: mt-2 text-2xl font-bold text-zinc-900
- Trend: mt-2 text-xs font-medium

## Usage Example in Dashboard
Use 3-4 cards in a grid layout:
- Total Revenue
- Orders
- New Customers
- Conversion Rate

Example prop usage:
- title="Total Revenue"
- value="$24,500"
- trend="+12.4% from last month"
- trendType="up"

## Dashboard Layout Tip
Inside dashboard page:
- Use grid classes like: grid gap-4 sm:grid-cols-2 xl:grid-cols-4
- Render multiple StatCard components with different data.

## Testing Checklist
- Card renders correctly with only title + value.
- Trend text appears only when provided.
- Trend color changes by trendType.
- Cards remain responsive on mobile and desktop.
- Long values/text do not break layout.

## Next Step After StatCard
After this card is done:
1. Create PageTitle section on top of dashboard.
2. Add AppHeader and AppSidebar layout.
3. Place stat cards in dashboard content area.
