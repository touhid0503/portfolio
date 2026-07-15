/*
 * ======================================================================================
 * Contributor    :      S. M. ZAKI AL SAAD MARJAN
 * Qualification  :      BSc in CSE, VU
 * Position       :      Owner & Founder Of HypnotiXstudio
 * ======================================================================================
 */

// --- Theme Management ---
const html = document.documentElement;

// Initialize Theme on Load
const initTheme = () => {
    if (
        localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
};

// Toggle Theme Function (called by HTML button)
const toggleTheme = () => {
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
};

// --- Scroll Reveal Animations ---
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px"
    });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
};

// Run scripts on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    revealOnScroll();
});