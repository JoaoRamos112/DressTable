document.addEventListener("DOMContentLoaded", function() {

    var menuLogo = document.getElementById("idMenuLogo");
    var menuBtn = document.getElementById("idMenuBtn");
    var menuOptions = document.getElementById("idMenuOptionsWrapper");
    var produtosTalheres = document.getElementById("idProdutosTalheres");
    var produtosGuarnanapos = document.getElementById("idProdutosGuarnanapos");
    var produtosToalha = document.getElementById("idProdutosToalha");
    var produtosCaminhos = document.getElementById("idProdutosCaminhos");
    var produtosAcessorios = document.getElementById("idProdutosAcessorios");
    var produtosIndividuais = document.getElementById("idProdutosIndividuais");
    var clicked = false;
    let larguraAtual;

    const elements = document.querySelectorAll('.scroll-animation');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });

    function obterLarguraAtual() {
        larguraAtual = window.innerWidth;
        if (larguraAtual < 1200 & larguraAtual > 600) {
            produtosGuarnanapos.classList.remove("topPadding");
            produtosIndividuais.classList.remove("topPadding");
            produtosCaminhos.classList.remove("topPadding");
            produtosTalheres.classList.add("topPadding");
            produtosToalha.classList.add("topPadding");
            produtosAcessorios.classList.add("topPadding");
        } else if (larguraAtual <= 600) {
            produtosTalheres.classList.add("topPadding");
            produtosToalha.classList.remove("topPadding");
            produtosAcessorios.classList.remove("topPadding");
            produtosGuarnanapos.classList.remove("topPadding");
            produtosIndividuais.classList.remove("topPadding");
            produtosCaminhos.classList.remove("topPadding")
        }
    }

    document.addEventListener("scroll", function() {
        if (window.scrollY > 30) {
            menuBtn.classList.remove("hidden");
            menuLogo.classList.remove("hidden");
            if (menuOptions.classList.contains('menuWrapperScrolled')) {
                menuOptions.style.animation = 'slideUp 0.5s ease-in-out';
                setTimeout(() => {
                    menuOptions.classList.remove('menuWrapperScrolled');
                    menuOptions.classList.add("hidden");
                }, 500);
                clicked = false;
            }
        } else {
            menuBtn.classList.add("hidden");
            menuLogo.classList.add("hidden");
            clicked = false;
        }
    });

    menuBtn.addEventListener('click', function() {
        if (clicked == false) {
            menuOptions.style.animation = 'slideDown 0.5s ease-in-out';
            menuOptions.classList.remove("hidden");
            menuOptions.classList.add('menuWrapperScrolled');
            clicked = true;
        } else {
            menuOptions.style.animation = 'slideUp 0.5s ease-in-out';
            setTimeout(() => {
                menuOptions.classList.remove('menuWrapperScrolled');
                menuOptions.classList.add("hidden");
            }, 500);
            clicked = false;
        }
    });

    menuLogo.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    obterLarguraAtual();

});
