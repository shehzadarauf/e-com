# AppSidebar Component Plan and Instructions

## Purpose
Build a reusable AppSidebar component for the dashboard layout so users can move between main sections like Dashboard, Orders, Products, and Settings.

## What AppSidebar Should Show
- Brand or app name at the top
- Navigation menu items in the middle
- One active menu item style
- Optional footer action at the bottom like Settings or Logout

## Data to Start With
You can begin with a simple array inside `AppSidebar.vue`:
- Dashboard
- Orders
- Products
- Customers
- Analytics
- Settings

Later, this can become an array of objects like:
- label
- icon
- active

## Build Steps
1. Open `AppSidebar.vue`.
2. Create a simple menu array in `<script setup>`.
3. Add an `<aside>` wrapper for the sidebar.
4. Add the brand section at the top.
5. Add a `<nav>` section for menu items.
6. Use `v-for` to render all links from the menu array.
7. Style one item as active, usually Dashboard first.
8. Add spacing so the sidebar feels clean and easy to scan.
9. Keep the sidebar full height with a fixed width.

## Suggested Tailwind Style
- Sidebar wrapper: `w-64 min-h-screen border-r border-zinc-200 bg-white p-4`
- Brand title: `text-xl font-bold text-zinc-900`
- Brand subtitle: `mt-1 text-sm text-zinc-500`
- Nav wrapper: `mt-8 space-y-2`
- Default item: `block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100`
- Active item: `bg-zinc-900 text-white`

## Basic Structure Idea
Your component can follow this shape:
- top brand area
- middle navigation links
- bottom extra action if needed

Example sections:
- Brand
- Menu
- Footer action

## Usage Example in Dashboard
Use the sidebar beside the main dashboard content:
- left side: `AppSidebar`
- right side: `AppHeader` and page content

Example layout idea:
- parent wrapper: `flex min-h-screen`
- sidebar: fixed width
- content: `flex-1`

## Testing Checklist
- Sidebar appears on the left side of the page.
- It stays full height.
- Menu items render correctly.
- Active item is visually different.
- Hover state works on other items.
- Layout still looks good on smaller screens.

## Next Step After Sidebar
After this sidebar is done:
1. Place `AppSidebar` and `AppHeader` together in `dashboardView.vue`.
2. Add your StatCard section inside the main content area.
3. Later, connect sidebar items to router links.
