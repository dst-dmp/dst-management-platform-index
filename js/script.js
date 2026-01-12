$(window).on("load", function () {

    "use strict";
/* ===================================
        Loading Timeout
 ====================================== */

$('.side-menu').removeClass('hidden');

setTimeout(function(){
    $('.loader-bg').fadeToggle();
}, 1000);

// $('.navbar-collapse .navbar-nav .nav-link:nth-child(1)').addClass('active');
$('.navbar-collapse .navbar-nav .nav-link:nth-child(2)').removeClass('active');

});

jQuery(function ($) {

    "use strict";

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 260) { // Set position from top to add class
        $('header').addClass('header-appear');
    } else {
        $('header').removeClass('header-appear');
    }
});

//scroll to appear
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500)
        $('.scroll-top-arrow').fadeIn('slow');
    else
        $('.scroll-top-arrow').fadeOut('slow');
});

//Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});

$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80
    }, 800);
});

/* ===================================
    Side Menu
====================================== */

if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
    }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}

/* ===================================
    WOW Animation
====================================== */

if ($(window).width() > 991) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}

/* =====================================
     Circular Bars
====================================== */

$(".circular-wrap").appear(function () {
    $(".circle").circleProgress({
        size: 210,
        lineCap: "round",
        fill: {
            gradient: ["#00bbff", "#00bbff"],
        },
    });
    $("#circletwo").circleProgress({
        size: 210,
        lineCap: "round",
        fill: {
            gradient: ["#002450", "#002450"],
        },
    });
});

$(".circular-wrap.dark").appear(function () {
    $('.myskill').circleProgress({
        lineCap: "round",
        size: 200,
    });
});

/* ===================================
       Testimonial-Carousel
====================================== */
$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

});