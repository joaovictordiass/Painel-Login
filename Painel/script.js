const menu = document.getElementById('menuItems');

// Adiciona um ouvinte de evento para o evento de clique em todo o menu
menu.addEventListener('click', function(toggleMenu) {
    // Verifica se o clique foi em um item do menu
    if (e.target.tagName === 'A') {
        // Evita que o link seja seguido
        e.preventDefault();
        
        // Implemente a lógica desejada para o clique do menu aqui
        console.log('Clicou em:', e.target.innerText);
    }
});
