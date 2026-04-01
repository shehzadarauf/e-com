# Input Component Plan

## Goal

Create a reusable input field for login and signup forms.

## Scope

- Text, email, and password input types
- Label support
- Error message display
- Disabled state
- Model binding support

## Step-by-Step Plan

1. Define props: modelValue, type, label, placeholder, error, disabled, id.
2. Emit update:modelValue on user input.
3. Render label only when label prop is provided.
4. Add base input styles for consistent form UI.
5. Show error text under input when error exists.
6. Add focus and invalid styling for better UX.

## Usage Pattern

- Bind each field with v-model.
- Pass error message from validation object.
- Keep labels short and clear.
- Use matching ids for label and input.

## Testing Checklist

- v-model updates correctly.
- Label and placeholder display correctly.
- Error state appears and clears properly.
- Password type hides text.
