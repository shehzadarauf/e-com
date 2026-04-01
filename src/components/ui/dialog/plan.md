# Dialog Component Plan

## Goal

Create a reusable dialog (modal) component for confirmations, form popups, and alerts.

## Scope

- Open and close dialog state
- Overlay backdrop with click-to-close option
- Header, content, and footer slot support
- Close button and escape key handling
- Basic transition animation

## Step-by-Step Plan

1. Define props: modelValue, title, closeOnOverlay, closeOnEsc.
2. Emit update:modelValue to control open/close with v-model.
3. Add backdrop overlay and centered dialog panel.
4. Add header, body, footer slot structure.
5. Implement close actions: close button, overlay click, Escape key.
6. Add transition classes for smooth open/close.
7. Ensure keyboard accessibility and focus behavior.

## Usage Pattern

- Control dialog with v-model from parent component.
- Use for delete confirmation and profile/settings popups.
- Keep one primary action and one cancel action in footer.
- Keep dialog content short and focused.

## Testing Checklist

- Opens and closes from parent state correctly.
- Overlay click behavior matches prop setting.
- Escape closes dialog when enabled.
- Footer action buttons trigger expected events.
- Works on mobile and desktop screen sizes.
