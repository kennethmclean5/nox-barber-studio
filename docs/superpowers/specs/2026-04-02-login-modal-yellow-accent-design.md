# Login Modal & Yellow Accent — Design Spec

## 1. Login/Membership Button

### Desktop Navbar
Add a "Members" link in `.nav-right`, between the theme toggle and "Book Now". Styled as a text link matching existing nav link style.

### Mobile Menu
Add "Members" as the last item in the mobile menu list, above the "Book Now" button.

### Login Modal
On click, opens a centered modal overlay with:
- Title: "Member Login"
- Email input field
- Password input field
- "Log In" button (styled with `--accent`)
- "Forgot password?" link (placeholder, no action)
- "Not a member? Sign up" link (placeholder, no action)
- Close button (X) in top-right corner
- Clicking the overlay backdrop closes the modal

Modal is UI only — form does not submit. Login button shows a brief "Coming soon" message or closes the modal.

Modal styling should match the existing booking modal pattern in the codebase.

## 2. Accent Color Change

Replace green accent with race car yellow across the entire site.

### Color Values
- **Dark mode (`[data-theme="dark"]`):** `--accent: #facc15;` `--accent-dim: rgba(250, 204, 21, 0.15);`
- **Light mode (`:root`):** `--accent: #eab308;` `--accent-dim: rgba(234, 179, 8, 0.1);`

### Affected Elements
All elements using `var(--accent)` and `var(--accent-dim)`, including:
- "Book Now" buttons (nav, mobile, hero)
- Hero CTA primary button
- Service cards selected state
- Instagram follow button
- Mobile menu active link color
- Any hardcoded `#22c55e`, `#16a34a`, or green hover states

### Hardcoded Green Overrides
Replace all hardcoded green values:
- `#22c55e` -> `#facc15`
- `#16a34a` -> `#eab308`
- `rgba(34, 197, 94, ...)` -> `rgba(250, 204, 21, ...)`
- `rgba(22, 163, 74, ...)` -> `rgba(234, 179, 8, ...)`

### Text Contrast
Yellow on dark backgrounds works well. For light mode, the "Book Now" button text should be dark (`#1a1a1a`) rather than white to maintain readability on yellow.
