document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.section-for-card');
    let activeCard = null;

    // Ativa o primeiro card inicialmente
    activateCard(cards[0]);

    cards.forEach(card => {
        card.addEventListener('mouseover', () => {
            activateCard(card);
        });

        card.addEventListener('mouseout', () => {
            if (card !== activeCard) {
                deactivateCard(card);
            }
        });
    });

    function activateCard(card) {
        activeCard = card;
        card.style.width = '40%';
        card.classList.add('active');
        
        // Ativa os textos dentro do card ativo
        card.querySelectorAll('.section-for-text-bottom, .section-for-text-top').forEach(text => {
            text.classList.add('active');
        });

        // Ativa a sobreposição apenas para o card ativo
        card.querySelector('.section-for-overlay').style.opacity = '1';

        cards.forEach(c => {
            if (c !== card) {
                c.style.width = '20%';
                c.classList.remove('active');

                // Desativa os textos dentro dos cards inativos
                c.querySelectorAll('.section-for-text-bottom, .section-for-text-top').forEach(text => {
                    text.classList.remove('active');
                });

                // Oculta a sobreposição nos cards inativos
                c.querySelector('.section-for-overlay').style.opacity = '0';
            }
        });
    }

    function deactivateCard(card) {
        card.style.width = '';
        card.classList.remove('active');
        
        // Desativa os textos dentro do card desativado
        card.querySelectorAll('.section-for-text-bottom, .section-for-text-top').forEach(text => {
            text.classList.remove('active');
        });

        // Oculta a sobreposição nos cards desativados
        card.querySelector('.section-for-overlay').style.opacity = '0';
    }
});
