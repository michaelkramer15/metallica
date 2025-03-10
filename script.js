document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.burger-icon');
    const navLinks = document.querySelector('.nav-links');

    burgerIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animation du burger
        const spans = burgerIcon.querySelectorAll('span');
        spans.forEach(span => span.classList.toggle('active'));
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = burgerIcon.querySelectorAll('span');
            spans.forEach(span => span.classList.remove('active'));
        });
    });
});

// Smooth scroll pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});