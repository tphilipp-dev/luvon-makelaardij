// main.js - Functionaliteit voor Luvon Makelaardij

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Voeg een class toe aan de navigatiebalk bij het scrollen
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    console.log("Luvon Makelaardij script geladen. Welkom in de premium wereld.");
});
