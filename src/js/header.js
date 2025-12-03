document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const closeBtn = document.querySelector('.close-menu');
    const navList = document.getElementById('nav-list-mobile');
    const navLinks = navList.querySelectorAll('a');

    // Função para abrir o menu
    hamburger.addEventListener('click', () => {
        navList.classList.add('open');
    });

    // Função para fechar o menu pelo botão 'X'
    closeBtn.addEventListener('click', () => {
        navList.classList.remove('open');
    });

    // Função para fechar o menu ao clicar em um link (navegação)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('open');
        });
    });
});