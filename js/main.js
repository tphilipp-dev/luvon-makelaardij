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
