# Card Component Plan

## Goal

Build a reusable card container for auth forms and dashboard widgets.

## Scope

- Base card wrapper
- Optional card title and description slots
- Body section for custom content
- Optional footer area

## Step-by-Step Plan

1. Create a base card container with padding, border, and shadow.
2. Add optional structure: header, content, footer.
3. Expose slots for flexible content layout.
4. Keep spacing and typography consistent across pages.
5. Test in login and signup pages first.

## Usage Pattern

- Wrap login and signup forms inside card.
- Keep one card width standard for auth pages.
- Use header slot for page title and subtitle.
- Use footer slot for helper links.

## Testing Checklist

- Card spacing looks correct on mobile and desktop.
- Slot content aligns as expected.
- Reused card style stays consistent in multiple views.
