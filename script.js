const themeButton = document.getElementById('toggle-theme');

themeButton.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento <body>
    document.body.classList.toggle('dark-mode');

    // Atualiza o texto do botão conforme o tema ativo
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Modo Claro';
    } else {
        themeButton.textContent = 'Modo Escuro';
    }
});
// Seleciona o botão de alterar tema
const themeButton = document.getElementById('toggle-theme');

// Adiciona o evento de clique
themeButton.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no elemento <body>
    document.body.classList.toggle('dark-mode');

    // Altera o texto do botão de acordo com o tema atual
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Modo Claro';
    } else {
        themeButton.textContent = 'Modo Escuro';
    }
});