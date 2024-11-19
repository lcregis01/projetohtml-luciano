// Função para alternar entre as páginas
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const pageToShow = document.getElementById(pageId);
    pageToShow.classList.add('active');
    
    // Garantir que a página seja rolada para o topo
    scrollToTop();
}

// Função para rolar a página para o topo
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Inicializa a página mostrando a seção de "saúde"
showPage('saude');
