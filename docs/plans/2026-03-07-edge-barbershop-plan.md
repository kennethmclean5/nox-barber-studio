# Edge Barbershop Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a single-page barbershop website for "Edge" with a scroll-driven vertical timeline, section animations, and a clean light aesthetic.

**Architecture:** Three files — `index.html` (markup), `styles.css` (styling), `script.js` (scroll animations). No dependencies, no build step. The timeline is a vertical line element whose filled height is driven by scroll position. Sections fade in via IntersectionObserver.

**Tech Stack:** Plain HTML5, CSS3, vanilla JavaScript

---

### Task 1: HTML Structure — Navbar + Hero

**Files:**
- Create: `index.html`

**Step 1: Create `index.html` with full document structure, navbar, and hero section**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edge Barbershop</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">EDGE</a>
            <button class="hamburger" id="hamburger" aria-label="Toggle menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <ul class="nav-links" id="nav-links">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <a href="#" class="btn-book">Book Now</a>
        </div>
    </nav>

    <section class="hero" id="hero">
        <div class="hero-content">
            <h1 class="hero-title">EDGE</h1>
            <p class="hero-tagline">Precision cuts. Clean lines. Sharp style.</p>
            <a href="#services" class="btn-primary">Our Services</a>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
```

**Step 2: Create empty `styles.css` and `script.js` so the page loads without errors**

Create empty files: `styles.css`, `script.js`

**Step 3: Open `index.html` in browser and verify navbar and hero text render**

---

### Task 2: HTML Structure — Timeline Sections + Footer

**Files:**
- Modify: `index.html` (add between hero and script tag)

**Step 1: Add the timeline wrapper and all four sections**

Insert after `</section><!-- hero -->` and before `<script>`:

```html
    <div class="timeline-wrapper">
        <div class="timeline-line">
            <div class="timeline-progress" id="timeline-progress"></div>
        </div>

        <section class="timeline-section" id="services">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h2>Services</h2>
                <div class="services-grid">
                    <div class="service-card">
                        <span class="service-name">Classic Cut</span>
                        <span class="service-price">$30</span>
                    </div>
                    <div class="service-card">
                        <span class="service-name">Fade</span>
                        <span class="service-price">$35</span>
                    </div>
                    <div class="service-card">
                        <span class="service-name">Beard Trim</span>
                        <span class="service-price">$20</span>
                    </div>
                    <div class="service-card">
                        <span class="service-name">Cut + Beard</span>
                        <span class="service-price">$45</span>
                    </div>
                    <div class="service-card">
                        <span class="service-name">Line Up</span>
                        <span class="service-price">$15</span>
                    </div>
                    <div class="service-card">
                        <span class="service-name">Hot Towel Shave</span>
                        <span class="service-price">$25</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="timeline-section" id="about">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h2>About</h2>
                <div class="about-content">
                    <div class="about-text">
                        <p>Edge is more than a barbershop — it's where craft meets community. Founded on the belief that a great cut is an experience, not just a service.</p>
                        <p>Our barbers bring years of skill and attention to detail to every chair. Walk in, sit down, and leave looking your best.</p>
                    </div>
                    <div class="about-image">
                        <div class="image-placeholder">Photo</div>
                    </div>
                </div>
            </div>
        </section>

        <section class="timeline-section" id="gallery">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h2>Gallery</h2>
                <div class="gallery-grid">
                    <div class="gallery-item"><div class="image-placeholder">1</div></div>
                    <div class="gallery-item"><div class="image-placeholder">2</div></div>
                    <div class="gallery-item"><div class="image-placeholder">3</div></div>
                    <div class="gallery-item"><div class="image-placeholder">4</div></div>
                    <div class="gallery-item"><div class="image-placeholder">5</div></div>
                    <div class="gallery-item"><div class="image-placeholder">6</div></div>
                </div>
            </div>
        </section>

        <section class="timeline-section" id="contact">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h2>Contact</h2>
                <div class="contact-content">
                    <div class="contact-info">
                        <div class="contact-item">
                            <h3>Location</h3>
                            <p>123 Main Street<br>Your City, ST 00000</p>
                        </div>
                        <div class="contact-item">
                            <h3>Hours</h3>
                            <p>Mon–Fri: 9am – 7pm<br>Sat: 9am – 5pm<br>Sun: Closed</p>
                        </div>
                        <div class="contact-item">
                            <h3>Phone</h3>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>
                    <form class="contact-form" onsubmit="return false;">
                        <input type="text" placeholder="Name" required>
                        <input type="email" placeholder="Email" required>
                        <textarea placeholder="Message" rows="4" required></textarea>
                        <button type="submit" class="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>

    <footer class="footer">
        <div class="footer-container">
            <p>&copy; 2026 Edge Barbershop. All rights reserved.</p>
            <div class="footer-socials">
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="TikTok">TikTok</a>
            </div>
        </div>
    </footer>
```

**Step 2: Verify page loads with all sections visible as unstyled HTML**

---

### Task 3: CSS — Base Styles, Navbar, Hero

**Files:**
- Modify: `styles.css`

**Step 1: Write reset, variables, navbar, and hero styles**

```css
/* --- Reset & Variables --- */
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --bg: #fafafa;
    --text: #1a1a1a;
    --accent: #2d2d2d;
    --gray: #e5e5e5;
    --font: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font);
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
}

/* --- Navbar --- */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: var(--bg);
    transition: box-shadow 0.3s ease;
}

.navbar.scrolled {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-logo {
    font-size: 1.5rem;
    font-weight: 800;
    letter-spacing: 0.15em;
    color: var(--text);
    text-decoration: none;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: var(--text);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.03em;
    transition: opacity 0.2s;
}

.nav-links a:hover {
    opacity: 0.6;
}

.btn-book {
    background: var(--accent);
    color: #fff;
    padding: 0.6rem 1.4rem;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    border-radius: 4px;
    transition: opacity 0.2s;
}

.btn-book:hover {
    opacity: 0.85;
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
}

.hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--text);
    transition: transform 0.3s, opacity 0.3s;
}

/* --- Hero --- */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 2rem 4rem;
}

.hero-title {
    font-size: clamp(4rem, 12vw, 10rem);
    font-weight: 900;
    letter-spacing: 0.1em;
    line-height: 1;
}

.hero-tagline {
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    margin-top: 1rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    opacity: 0.7;
}

.btn-primary {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.8rem 2rem;
    background: var(--accent);
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
}

.btn-primary:hover {
    opacity: 0.85;
}
```

**Step 2: Verify navbar is fixed at top, hero fills viewport, text and button render correctly**

---

### Task 4: CSS — Timeline Line, Dots, and Section Layout

**Files:**
- Modify: `styles.css` (append)

**Step 1: Add timeline wrapper, line, dots, and section layout styles**

```css
/* --- Timeline --- */
.timeline-wrapper {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem 4rem 6rem;
}

.timeline-line {
    position: absolute;
    left: 2.5rem;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--gray);
}

.timeline-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: var(--accent);
    transition: height 0.05s linear;
}

.timeline-section {
    position: relative;
    padding: 4rem 0;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.timeline-section.visible {
    opacity: 1;
    transform: translateY(0);
}

.timeline-dot {
    position: absolute;
    left: -4.35rem;
    top: 4rem;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2px solid var(--gray);
    background: var(--bg);
    transition: border-color 0.3s, background 0.3s;
}

.timeline-section.visible .timeline-dot {
    border-color: var(--accent);
    background: var(--accent);
}

.timeline-content h2 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-bottom: 2rem;
}
```

**Step 2: Verify the gray timeline line appears on the left, dots are positioned at each section**

---

### Task 5: CSS — Services, About, Gallery, Contact, Footer

**Files:**
- Modify: `styles.css` (append)

**Step 1: Add styles for all content sections and footer**

```css
/* --- Services --- */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1rem;
}

.service-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 1.5rem;
    border: 1px solid var(--gray);
    border-radius: 6px;
    transition: box-shadow 0.2s;
}

.service-card:hover {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.service-name {
    font-weight: 500;
}

.service-price {
    font-weight: 700;
    font-size: 1.1rem;
}

/* --- About --- */
.about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text p {
    margin-bottom: 1rem;
    opacity: 0.85;
}

.image-placeholder {
    width: 100%;
    aspect-ratio: 4/3;
    background: var(--gray);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
    font-size: 0.9rem;
}

/* --- Gallery --- */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
}

.gallery-item .image-placeholder {
    aspect-ratio: 1;
}

/* --- Contact --- */
.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-item {
    margin-bottom: 1.5rem;
}

.contact-item h3 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
    opacity: 0.5;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 0.8rem 1rem;
    border: 1px solid var(--gray);
    border-radius: 4px;
    font-family: var(--font);
    font-size: 0.9rem;
    background: #fff;
    transition: border-color 0.2s;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent);
}

/* --- Footer --- */
.footer {
    border-top: 1px solid var(--gray);
    padding: 2rem;
    margin-top: 4rem;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.85rem;
    opacity: 0.6;
}

.footer-socials {
    display: flex;
    gap: 1.5rem;
}

.footer-socials a {
    color: var(--text);
    text-decoration: none;
    transition: opacity 0.2s;
}

.footer-socials a:hover {
    opacity: 0.6;
}
```

**Step 2: Verify all sections are styled — services grid, about layout, gallery grid, contact form, footer**

---

### Task 6: CSS — Mobile Responsive Styles

**Files:**
- Modify: `styles.css` (append)

**Step 1: Add responsive breakpoints**

```css
/* --- Mobile --- */
@media (max-width: 768px) {
    .hamburger {
        display: flex;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--bg);
        flex-direction: column;
        padding: 1rem 2rem 2rem;
        gap: 1rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
    }

    .nav-links.open {
        display: flex;
    }

    .timeline-wrapper {
        padding: 4rem 1.5rem 4rem 3.5rem;
    }

    .timeline-line {
        left: 1rem;
    }

    .timeline-dot {
        left: -3.1rem;
    }

    .about-content {
        grid-template-columns: 1fr;
    }

    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .contact-content {
        grid-template-columns: 1fr;
    }

    .footer-container {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
    }
}
```

**Step 2: Test in browser at narrow width — verify hamburger appears, grids stack, timeline repositions**

---

### Task 7: JavaScript — Scroll Animations + Timeline + Hamburger

**Files:**
- Modify: `script.js`

**Step 1: Write all scroll behavior, IntersectionObserver, timeline progress, and hamburger toggle**

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const timelineProgress = document.getElementById('timeline-progress');
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    const sections = document.querySelectorAll('.timeline-section');

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // Navbar shadow on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Timeline progress on scroll
    window.addEventListener('scroll', () => {
        if (!timelineWrapper) return;
        const rect = timelineWrapper.getBoundingClientRect();
        const wrapperTop = rect.top + window.scrollY;
        const wrapperHeight = timelineWrapper.offsetHeight;
        const scrolled = window.scrollY + window.innerHeight * 0.5 - wrapperTop;
        const progress = Math.min(Math.max(scrolled / wrapperHeight, 0), 1);
        timelineProgress.style.height = (progress * 100) + '%';
    });

    // Section fade-in on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));
});
```

**Step 2: Verify in browser — scroll down and confirm:**
- Navbar gets shadow
- Timeline line fills as you scroll
- Dots highlight when sections enter view
- Sections fade in and slide up
- Hamburger opens/closes menu on mobile

---

### Task 8: Final Polish + Verification

**Files:**
- Review: `index.html`, `styles.css`, `script.js`

**Step 1: Open site in browser and scroll through entire page top to bottom**

Verify checklist:
- [ ] Navbar fixed, shadow on scroll, Book Now button styled
- [ ] Hero fills viewport, large EDGE title
- [ ] Timeline line fills on scroll
- [ ] Dots highlight on each section
- [ ] Sections fade in
- [ ] Services grid renders 6 cards
- [ ] About has text + image placeholder side by side
- [ ] Gallery shows 6 placeholder squares
- [ ] Contact has info + form
- [ ] Footer at bottom
- [ ] Mobile responsive (test at 375px width)

**Step 2: Commit all files**

```bash
git init
git add index.html styles.css script.js docs/
git commit -m "feat: initial Edge barbershop single-page site with scroll timeline"
```
