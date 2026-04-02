document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const timelineProgress = document.getElementById('timeline-progress');
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    const timelineLine = document.querySelector('.timeline-line');
    const sections = document.querySelectorAll('.timeline-section');

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

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

    // Update timeline line top and height to span from first to last visible dot
    function updateTimelineHeight() {
        if (!timelineWrapper || !timelineLine) return;
        const visibleSections = Array.from(sections).filter(s => {
            return s.offsetParent !== null;
        });
        if (visibleSections.length < 2) {
            timelineLine.style.height = '0px';
            return;
        }
        const firstSection = visibleSections[0];
        const lastSection = visibleSections[visibleSections.length - 1];
        const firstDot = firstSection.querySelector('.timeline-dot');
        const lastDot = lastSection.querySelector('.timeline-dot');
        if (!firstDot || !lastDot) return;
        // Use getBoundingClientRect relative to wrapper for accurate positions
        const wrapperRect = timelineWrapper.getBoundingClientRect();
        const firstDotRect = firstDot.getBoundingClientRect();
        const lastDotRect = lastDot.getBoundingClientRect();
        const firstDotCenter = (firstDotRect.top + firstDotRect.height / 2) - wrapperRect.top;
        const lastDotCenter = (lastDotRect.top + lastDotRect.height / 2) - wrapperRect.top;
        const lineHeight = lastDotCenter - firstDotCenter;
        timelineLine.style.top = firstDotCenter + 'px';
        timelineLine.style.height = Math.max(0, lineHeight) + 'px';
    }

    // Timeline progress on scroll
    window.addEventListener('scroll', () => {
        if (!timelineWrapper || !timelineLine) return;
        updateTimelineHeight();
        const lineHeight = parseFloat(timelineLine.style.height) || 0;
        if (lineHeight <= 0) return;
        const lineRect = timelineLine.getBoundingClientRect();
        const lineTop = lineRect.top;
        const scrollTarget = window.innerHeight * 0.5;
        const scrolled = scrollTarget - lineTop;
        const progress = Math.min(Math.max(scrolled / lineHeight, 0), 1);
        timelineProgress.style.height = (progress * 100) + '%';
    });

    window.addEventListener('resize', updateTimelineHeight);
    updateTimelineHeight();

    // Booking state
    const booking = { barber: null, service: null, day: null, time: null };
    const stickyBar = document.getElementById('sticky-bar');

    function updateSummary() {
        document.getElementById('summary-barber').textContent = booking.barber || '—';
        document.getElementById('summary-service').textContent = booking.service || '—';
        document.getElementById('summary-day').textContent = booking.day || '—';
        document.getElementById('summary-time').textContent = booking.time || '—';

        const btn = document.getElementById('btn-confirm');
        btn.disabled = !(booking.barber && booking.service && booking.day && booking.time);

        // Show sticky bar once a barber is selected
        if (booking.barber) {
            stickyBar.classList.add('visible');
        }
    }

    // Barber "Book With" button — select barber + reveal services + scroll
    const barberCards = document.querySelectorAll('.barber-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const servicesSection = document.getElementById('services');
    const bookingDaySection = document.getElementById('booking-day');
    const bookingTimeSection = document.getElementById('booking-time');
    const aboutSection = document.getElementById('about');
    const gallerySection = document.getElementById('gallery');
    const pricingSection = document.getElementById('pricing');
    const contactSection = document.getElementById('contact');

    document.querySelectorAll('.barber-btn-book').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.barber-card');
            const wasSelected = card.classList.contains('selected');
            barberCards.forEach(c => c.classList.remove('selected'));

            if (wasSelected) {
                // Deselect barber — reset everything
                booking.barber = null;
                booking.service = null;
                booking.day = null;
                booking.time = null;
                servicesSection.classList.remove('section-revealed', 'visible');
                bookingDaySection.classList.remove('section-revealed', 'visible');
                bookingTimeSection.classList.remove('section-revealed', 'visible');
                serviceCards.forEach(c => c.classList.remove('selected'));
                dayBtns.forEach(b => b.classList.remove('selected'));
                timeBtns.forEach(b => b.classList.remove('selected'));
                aboutSection.classList.remove('section-hidden');
                gallerySection.classList.remove('section-hidden');
                pricingSection.classList.remove('section-hidden');
                contactSection.classList.remove('section-hidden');
                stickyBar.classList.remove('visible');
                timelineWrapper.classList.remove('booking-active');
                updateSummary();
                requestAnimationFrame(() => requestAnimationFrame(updateTimelineHeight));
            } else {
                card.classList.add('selected');
                booking.barber = card.querySelector('.barber-name').textContent;
                updateSummary();

                // Reveal services only (next step)
                servicesSection.classList.add('section-revealed', 'visible');

                // Hide non-booking sections
                aboutSection.classList.add('section-hidden');
                gallerySection.classList.add('section-hidden');
                pricingSection.classList.add('section-hidden');
                contactSection.classList.add('section-hidden');
                timelineWrapper.classList.add('booking-active');

                requestAnimationFrame(() => requestAnimationFrame(updateTimelineHeight));

                const target = document.getElementById(card.dataset.scrollTo);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Barber "View Cuts" button — open modal with Instagram link
    document.querySelectorAll('.barber-btn-work').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.barber-card');
            const name = card.querySelector('.barber-name').textContent;
            const title = card.querySelector('.barber-title').textContent;
            const instagram = card.dataset.instagram || '#';
            document.getElementById('modal-barber-name').textContent = name;
            document.getElementById('modal-barber-title').textContent = title;
            document.getElementById('modal-instagram-link').href = instagram;
            modalOverlay.classList.add('active');
        });
    });

    // Close modal
    modalClose.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });

    // Service card click — select + hide about/gallery + scroll to booking
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const wasSelected = card.classList.contains('selected');
            serviceCards.forEach(c => c.classList.remove('selected'));

            if (wasSelected) {
                // Deselect service — hide day/time steps
                booking.service = null;
                booking.day = null;
                booking.time = null;
                bookingDaySection.classList.remove('section-revealed', 'visible');
                bookingTimeSection.classList.remove('section-revealed', 'visible');
                dayBtns.forEach(b => b.classList.remove('selected'));
                timeBtns.forEach(b => b.classList.remove('selected'));
                updateSummary();
                requestAnimationFrame(() => requestAnimationFrame(updateTimelineHeight));
            } else {
                card.classList.add('selected');
                const name = card.querySelector('.service-name').textContent;
                const price = card.querySelector('.service-price').textContent;
                booking.service = name + ' (' + price + ')';
                updateSummary();

                // Reveal day picker (next step)
                bookingDaySection.classList.add('section-revealed', 'visible');
                requestAnimationFrame(() => requestAnimationFrame(updateTimelineHeight));

                const target = document.getElementById(card.dataset.scrollTo);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Day picker
    const dayBtns = document.querySelectorAll('.day-btn');
    dayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const wasSelected = btn.classList.contains('selected');
            dayBtns.forEach(b => b.classList.remove('selected'));

            if (wasSelected) {
                // Deselect day — hide time step
                booking.day = null;
                booking.time = null;
                bookingTimeSection.classList.remove('section-revealed', 'visible');
                timeBtns.forEach(b => b.classList.remove('selected'));
                requestAnimationFrame(() => requestAnimationFrame(updateTimelineHeight));
            } else {
                btn.classList.add('selected');
                booking.day = btn.dataset.day;

                // Reveal time picker (next step)
                bookingTimeSection.classList.add('section-revealed', 'visible');
                requestAnimationFrame(() => requestAnimationFrame(updateTimelineHeight));
                bookingTimeSection.scrollIntoView({ behavior: 'smooth' });
            }
            updateSummary();
        });
    });

    // Time picker
    const timeBtns = document.querySelectorAll('.time-btn');
    timeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const wasSelected = btn.classList.contains('selected');
            timeBtns.forEach(b => b.classList.remove('selected'));

            if (wasSelected) {
                booking.time = null;
            } else {
                btn.classList.add('selected');
                booking.time = btn.dataset.time;
            }
            updateSummary();
        });
    });

    // Confirm booking
    document.getElementById('btn-confirm').addEventListener('click', () => {
        alert('Booking confirmed!\n\nBarber: ' + booking.barber + '\nService: ' + booking.service + '\nDay: ' + booking.day + '\nTime: ' + booking.time);
    });

    // Gallery carousel
    const carouselTrack = document.getElementById('carousel-track');
    const carouselSlides = carouselTrack.querySelectorAll('.carousel-slide');
    const carouselPrev = document.getElementById('carousel-prev');
    const carouselNext = document.getElementById('carousel-next');
    const carouselDotsContainer = document.getElementById('carousel-dots');
    let currentSlide = 0;
    let autoSlideInterval;

    // Create dots
    carouselSlides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', () => goToSlide(i));
        carouselDotsContainer.appendChild(dot);
    });

    function goToSlide(index) {
        currentSlide = index;
        carouselTrack.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';
        const dots = carouselDotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % carouselSlides.length);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + carouselSlides.length) % carouselSlides.length);
    }

    carouselNext.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    carouselPrev.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    startAutoSlide();

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
