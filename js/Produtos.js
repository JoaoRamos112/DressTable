document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("idHeader");
    const headerLogo = document.getElementById("idHeaderLogo");
    const headerOptions = document.getElementById("idHeaderOptions");
    const menuBtn = document.getElementById("idMenuBtn");
    const scrollBtn = document.getElementById("idScrollArrow");
    const backBtn = document.getElementById("idBackArrow");
    let menuClicked = true;
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

    // Função para tratar o scroll da página
    function handleScroll() {
        if (window.scrollY > 30) {
            scrollBtn.classList.add("faded");
            scrollBtn.classList.remove("visible");
            menuBtn.classList.remove("hidden");
            closeMenu();
            menuClicked = false;
        } else {
            scrollBtn.classList.remove("faded");
            scrollBtn.classList.add("visible");
            menuBtn.classList.add("hidden");
        }
    }

    // Abre menu
    function openMenu(){
        header.classList.add("scrolled");
        headerLogo.classList.add("hidden");
        headerOptions.classList.add("headerOptionsScrolled");
    }

    // Fecha menu
    function closeMenu(){
        header.classList.remove("scrolled");
        headerLogo.classList.remove("hidden");
        header.style.animation = "SlideUp 0.5s ease-in-out";
        headerOptions.classList.remove("headerOptionsScrolled");
    }

    // Função para voltar ao topo da página
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Função para voltar para a HomePage
    function goBack(){
        window.location.href = "HomePage.html";
    }

    // Adiciona o evento de scroll na página
    document.addEventListener("scroll", handleScroll);

    // Adiciona o evento de clique no botão do menu
    menuBtn.addEventListener('click', function(){
        if (!menuClicked){
            openMenu();
            menuClicked = true;
        } else {
            closeMenu();
            menuClicked = false;
        }
    });

    // Adiciona o evento de clique no logo do menu
    headerLogo.addEventListener("click", scrollToTop);

    // Evento para o botão de voltar
    backBtn.addEventListener("click", goBack);

    // Debouncing para o evento de resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(ajustarPadding, 150);
    });
});
