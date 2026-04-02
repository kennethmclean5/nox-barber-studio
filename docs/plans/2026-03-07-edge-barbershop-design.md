# Edge Barbershop — Single Page Website Design

## Overview
A single-page barbershop website for "Edge" with a modern, clean aesthetic and a vertical scroll-driven timeline connecting each section. Built with plain HTML, CSS, and vanilla JavaScript — no dependencies.

## Tech Stack
- `index.html` — entire site markup
- `styles.css` — all styling
- `script.js` — scroll animations + timeline logic

## Color Palette (Light & Clean)
- Background: `#fafafa` (off-white)
- Text: `#1a1a1a` (near-black)
- Accent: `#2d2d2d` (dark charcoal) — buttons, timeline line
- Subtle gray: `#e5e5e5` — borders, dividers
- Timeline gradient: charcoal-to-transparent fill on scroll

## Typography
- System font stack (Inter-style sans-serif)
- Headings: bold weight
- Body: regular/light weight
- "EDGE" in hero: bold condensed for impact

## Sections (top to bottom)

### 1. Navbar (fixed)
- Left: "EDGE" logo text
- Center/right: nav links — Services, About, Gallery, Contact
- Far right: "Book Now" button (filled, dark charcoal bg, white text)
- Book Now links to `#` placeholder (to be swapped for external booking URL later)
- On scroll: subtle box-shadow appears
- Mobile: hamburger menu for nav links, Book Now stays visible outside hamburger

### 2. Hero
- Large "EDGE" title
- Tagline text
- CTA button

### 3. Timeline Sections
A vertical timeline line runs down the left side (desktop) or center (mobile) connecting these sections:

#### Services
- Grid of service cards (name + price)
- Placeholder content

#### About
- Short paragraph about the shop
- Image placeholder

#### Gallery
- Photo grid with placeholder images

#### Contact
- Address, hours, phone
- Simple contact form

### 4. Footer
- Copyright
- Social media links

## Scroll Behavior

### Approach: CSS + Vanilla JS (no dependencies)
1. **Timeline line** — vertical pseudo-element, height driven by scroll position via JS. Fills downward with dark gradient as user scrolls.
2. **Dot markers** — circular dots at each section entry point. Highlight (fill with accent color) when their section enters the viewport.
3. **Section animations** — each section fades in and slides up using `IntersectionObserver`.
4. **Navbar shadow** — subtle shadow appears on scroll via scroll listener.

## Responsive Design
- Desktop: timeline on the left, content offset to the right
- Mobile: timeline centered, content stacked below each marker
- Navbar: hamburger menu on mobile, Book Now always visible
