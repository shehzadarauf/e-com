# Buttons Component Plan

## Goal

Build a reusable button component for auth pages and dashboard actions.

## Scope

- Primary, secondary, and ghost variants
- Small, medium, and large sizes
- Full-width option for form submit buttons
- Disabled and loading states

## Step-by-Step Plan

1. Define props: variant, size, type, disabled, loading, block.
2. Map variant classes and size classes.
3. Build computed class output from props.
4. Render a standard button with slot content.
5. Add loading spinner when loading is true.
6. Verify accessibility: button type, disabled behavior, focus state.

## Usage Pattern

- Use primary for main actions (Login, Sign up).
- Use secondary for alternate actions.
- Use block on form submit buttons.
- Use loading while waiting for API response.

## Testing Checklist

- All variants render correctly.
- Sizes are visually consistent.
- Disabled cannot be clicked.
- Loading shows spinner and prevents double submit.
