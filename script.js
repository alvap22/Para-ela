const card = document.getElementById('card');
const flowers = document.getElementById('flowers');

// Abrir o cartão e criar flores animadas
card.addEventListener('click', () => {
    if (!card.classList.contains('open')) {
        card.classList.add('open');
        card.style.transform = 'rotateY(180deg)';
        generateFlowers();
    }
});

// Fechar o cartão
function closeCard(event) {
    event.stopPropagation(); // Impede que o clique no botão dispare o evento do cartão
    if (card.classList.contains('open')) {
        card.classList.remove('open');
        card.style.transform = 'rotateY(0deg)';
        flowers.innerHTML = ''; // Limpa as flores ao fechar
    }
}

// Gerar flores animadas
function generateFlowers() {
    flowers.innerHTML = ''; // Limpar flores antigas
    for (let i = 0; i < 20; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flowers.appendChild(flower);

        // Remover após animação
        setTimeout(() => flower.remove(), 2000);
    }
}
