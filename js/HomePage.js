document.addEventListener("DOMContentLoaded", function() {
    const menuLogo = document.getElementById("idMenuLogo");
    const menuBtn = document.getElementById("idMenuBtn");
    const menuOptions = document.getElementById("idMenuOptionsWrapper");
    const produtosTalheres = document.getElementById("idProdutosTalheres");
    const produtosGuarnanapos = document.getElementById("idProdutosGuarnanapos");
    const produtosToalha = document.getElementById("idProdutosToalha");
    const produtosCaminhos = document.getElementById("idProdutosCaminhos");
    const produtosAcessorios = document.getElementById("idProdutosAcessorios");
    const produtosIndividuais = document.getElementById("idProdutosIndividuais");
    const scrollBtn = document.getElementById("idScrollArrow");
    let menuClicked = false;
    let larguraAtual = window.innerWidth;

    const elements = document.querySelectorAll('.scroll-animation');

    // Função para tratar animação de entrada
    function handleScrollAnimations(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }

    // Configuração do IntersectionObserver
    const observer = new IntersectionObserver(handleScrollAnimations, { threshold: 0.1 });
    elements.forEach(element => observer.observe(element));

    // Função para remover o padding com base na largura da janela
    function ajustarPadding() {
        larguraAtual = window.innerWidth;
        const elementos = [produtosGuarnanapos, produtosIndividuais, produtosCaminhos, produtosTalheres, produtosToalha, produtosAcessorios];

        elementos.forEach(el => el.classList.remove("topPadding"));

        if (larguraAtual <= 600) {
            produtosTalheres.classList.add("topPadding");
        } else if (larguraAtual <= 1200) {
            produtosTalheres.classList.add("topPadding");
            produtosAcessorios.classList.add("topPadding");
            produtosToalha.classList.add("topPadding");
        } else {
            produtosTalheres.classList.add("topPadding");
            produtosAcessorios.classList.add("topPadding");
            produtosToalha.classList.add("topPadding");
        }
    }

    // Função para tratar o scroll da página
    function handleScroll() {
        if (window.scrollY > 30) {
            menuBtn.classList.remove("hidden");
            menuLogo.classList.remove("hidden");
            scrollBtn.classList.add("faded");
            scrollBtn.classList.remove("visible");

            if (menuOptions.classList.contains('menuWrapperScrolled')) {
                menuOptions.style.animation = 'slideUp 0.5s ease-in-out';
                setTimeout(() => {
                    menuOptions.classList.remove('menuWrapperScrolled');
                    menuOptions.classList.add("hidden");
                }, 500);
                menuClicked = false;
            }
        } else {
            menuBtn.classList.add("hidden");
            menuLogo.classList.add("hidden");
            scrollBtn.classList.remove("faded");
            scrollBtn.classList.add("visible");
            menuClicked = false;
        }
    }

    // Função para tratar o clique no botão do menu
    function toggleMenu() {
        if (!menuClicked) {
            menuOptions.style.animation = 'slideDown 0.5s ease-in-out';
            menuOptions.classList.remove("hidden");
            menuOptions.classList.add('menuWrapperScrolled');
            menuClicked = true;
        } else {
            menuOptions.style.animation = 'slideUp 0.5s ease-in-out';
            setTimeout(() => {
                menuOptions.classList.remove('menuWrapperScrolled');
                menuOptions.classList.add("hidden");
            }, 500);
            menuClicked = false;
        }
    }

    // Função para voltar ao topo da página
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Adiciona o evento de scroll na página
    document.addEventListener("scroll", handleScroll);

    // Adiciona o evento de clique no botão do menu
    menuBtn.addEventListener('click', toggleMenu);

    // Adiciona o evento de clique no logo do menu
    menuLogo.addEventListener("click", scrollToTop);

    // Debouncing para o evento de resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(ajustarPadding, 150);
    });

    // Chama a função para ajustar o padding ao carregar a página
    ajustarPadding();
});
