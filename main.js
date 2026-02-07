// Micro-interazioni e logica base
document.addEventListener('DOMContentLoaded', () => {
    console.log('Vibe Coding & Antigravity Hub inizializzato!');
    
    // Esempio di micro-animazione su scroll o hover
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
