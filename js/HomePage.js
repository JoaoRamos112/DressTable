document.addEventListener("DOMContentLoaded", function() {

var menuLogo = document.getElementById("idMenuLogo");
var menuBtn = document.getElementById("idMenuBtn");
var header = document.getElementById("idHeader");
var menuOptions = document.getElementById("idMenuOptionsWrapper");
var menuLogoWrapper = document.getElementById("idMenuLogoWrapper");
var clicked = false;

document.addEventListener("scroll", function() {
    if(window.scrollY>30){
        menuBtn.classList.remove("hidden");
        menuLogo.classList.remove("hidden");
        header.classList.add("scrolled");
        menuOptions.classList.add("optionsClicked");
        menuLogoWrapper.classList.add("hidden");
        header.classList.add("hidden");
    }else{
        menuBtn.classList.add("hidden");
        menuLogo.classList.add("hidden");
        header.classList.remove("hidden");
        header.classList.remove("scrolled");
        menuOptions.classList.remove("optionsClicked");
        menuLogoWrapper.classList.remove("hidden");
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

});