$(document).ready(function(){
    document.addEventListener('scroll', function(e) {
        if(window.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(window.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    
    

    var typed = new Typed(".typing", {
        strings: ["STAŻU", "PRAKTYKI", "DOŚWIADCZENIA"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-2", {
        strings: ["ZAANGAŻOWANIE", "SUMIENNOŚĆ", "DETERMINACJĘ"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
});
