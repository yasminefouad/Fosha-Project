$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
    margin:28,
    dots:true,
    nav:true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
});

});