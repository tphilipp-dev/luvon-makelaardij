document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu balk wazig maken bij scrollen
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Scroll Animaties activeren
    // Pak alle elementen in de main en footer die moeten animeren
    const animatedElements = document.querySelectorAll('main .fade-up, .footer-col');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Zodra het element voor 10% in beeld is...
            if (entry.isIntersecting) {
                // ...geven we hem de 'is-visible' class zodat hij omhoog glijdt!
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Zorg dat hij dit maar 1 keer doet
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0
    });

    // Zet de 'wachter' op elk element
    animatedElements.forEach(el => observer.observe(el));
});

// 3. Cookie Banner Logica
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    // Check in het geheugen of de cookies al geaccepteerd zijn
    if (!localStorage.getItem('cookiesAccepted')) {
        // Zo niet, laat hem na 1,5 seconde soepel in beeld schuiven
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1500);
    }

    // Wat er gebeurt als je op de knop klikt
    acceptBtn.addEventListener('click', () => {
        // Sla de keuze op in het geheugen van de browser
        localStorage.setItem('cookiesAccepted', 'true');
        // Schuif de banner weer naar beneden
        cookieBanner.classList.remove('show');
    });
