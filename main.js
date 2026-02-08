// Micro-interazioni e logica base
document.addEventListener('DOMContentLoaded', () => {
    console.log('Vibe Coding & Antigravity Hub inizializzato!');

    // Gestione Header allo scroll
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Effetto hover sulle card glass
    const cards = document.querySelectorAll('.glass');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.02)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
