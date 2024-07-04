document.addEventListener("DOMContentLoaded", function() {

var menuLogo = document.getElementById("idMenuLogo");
var menuBtn = document.getElementById("idMenuBtn");
var header = document.getElementById("idHeader");
var menuOptions = document.getElementById("idMenuOptionsWrapper");
var menuLogoWrapper = document.getElementById("idMenuLogoWrapper");
var produtosTalheres = document.getElementById("idProdutosTalheres");
var produtosGuarnanapos = document.getElementById("idProdutosGuarnanapos");
var produtosToalha = document.getElementById("idProdutosToalha");
var produtosCaminhos = document.getElementById("idProdutosCaminhos");
var produtosAcessorios = document.getElementById("idProdutosAcessorios");
var produtosIndividuais = document.getElementById("idProdutosIndividuais");
var clicked = false;
let larguraAtual;

function obterLarguraAtual() {
    larguraAtual = window.innerWidth;
    if(larguraAtual<1200 & larguraAtual>600 ){
        produtosGuarnanapos.classList.remove("topPadding");
        produtosIndividuais.classList.remove("topPadding");
        produtosCaminhos.classList.remove("topPadding");
        produtosTalheres.classList.add("topPadding");
        produtosToalha.classList.add("topPadding");
        produtosAcessorios.classList.add("topPadding");
        menuLogoWrapper.classList.add("hidden");
    }else if(larguraAtual<=600){
        produtosTalheres.classList.add("topPadding");
        produtosToalha.classList.remove("topPadding");
        produtosAcessorios.classList.remove("topPadding");
        produtosGuarnanapos.classList.remove("topPadding");
        produtosIndividuais.classList.remove("topPadding");
        produtosCaminhos.classList.remove("topPadding")
    }
}


document.addEventListener("scroll", function() {
    if(window.scrollY>30){
        menuBtn.classList.remove("hidden");
        menuLogo.classList.remove("hidden");
        header.classList.add("scrolled");
        menuOptions.classList.add("optionsClicked");
        menuLogoWrapper.classList.add("hidden");
        header.classList.add("hidden");
        clicked = false;
    }else{
        menuBtn.classList.add("hidden");
        menuLogo.classList.add("hidden");
        header.classList.remove("hidden");
        header.classList.remove("scrolled");
        menuOptions.classList.remove("optionsClicked");
        menuLogoWrapper.classList.remove("hidden");
        clicked = false;
    }
});



menuBtn.addEventListener('click',function(){
    if(clicked == true){
        header.classList.remove("hidden");
        clicked = false;
    }else{
        header.classList.add("hidden");
        clicked = true;
    }
})

menuLogo.addEventListener("click",function(){
    window.scrollTo({top: 0, behavior:"smooth"});
})


obterLarguraAtual();


});