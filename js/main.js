// main.js - Functionaliteit voor Luvon Makelaardij

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. NAVIGATIE BALK BLUR EFFECT
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. HIGH-END SCROLL ANIMATIES
    // Selecteer automatisch alle blokken die we willen animeren
    const animatedElements = document.querySelectorAll(`
        .intro-headline, 
        .intro-text-wrapper, 
        .service-row, 
        .section-header,
        .property-card, 
        .center-btn,
        .review-header,
        .g-card,
        .cta-content,
        .footer-col
    `);

    // Voeg de voorbereidende CSS class toe
    animatedElements.forEach((el) => {
        el.classList.add('reveal-on-scroll');
    });

    // Observer instellingen: animatie start als element 10% in beeld is
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optioneel: stop observeren na 1x laden zodat het niet irritant wordt bij terug naar boven scrollen
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Start de observer
    animatedElements.forEach(el => observer.observe(el));

    // 3. HET "CASCADE" EFFECT VOOR GRIDS
    // Zorgt dat rijtjes (zoals huizen of reviews) mooi na elkaar binnenkomen in plaats van tegelijk
    const cascadeElements = (selector, delayMultiplier) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.style.transitionDelay = `${index * delayMultiplier}s`;
        });
    };

    cascadeElements('.property-card', 0.15); // Huizen komen 0.15s na elkaar
    cascadeElements('.g-card', 0.15);        // Reviews komen na elkaar
    cascadeElements('.footer-col', 0.10);    // Footer kolommen na elkaar
    cascadeElements('.service-row', 0.10);   // Diensten rijen

    console.log("Luvon Makelaardij: Scroll-magie is geactiveerd.");
});
