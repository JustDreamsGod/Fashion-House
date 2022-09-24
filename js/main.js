/* BACK TO TOP BUTTON */

$(window).scroll(function () {
    let scrolled = $(window).scrollTop();
    if (scrolled > 100) {
        $('#back_to_top').addClass('active');
    } else {
        $('#back_to_top').removeClass('active');
    }
});
$('#back_to_top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 1000)
});
$(window).scroll(function () {
    let scrolled = $(window).scrollTop();
    if (scrolled > 100) {
        $('#back_to_top').addClass('active');
    } else {
        $('#back_to_top').removeClass('active');
    }
});
$('#back_to_top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 1000)
});

/* HEADER */

$(window).scroll(function () {
    let scrolled = $(window).scrollTop();
    if (scrolled > 75) {
        $('#header').addClass('header--fixed');
    } else {
        $('#header').removeClass('header--fixed');
    }
});



/* BURGER */

$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });

    // SLIDER
    $('.slider__container').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        easing: 'ease',
        infinite: true,
        initialSlide: 0,         // с какого слайда начинать
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: false,
        draggable: false, //отключение свайпа на пк
        swipe: true,
        touchThreshold: 10, // длинна свайпа на моб для переключения
        touchMove: true, //разрешение передвижения слайда на моб по экрану
        waitForAnimate: true, // скорость переключения слайда вручную
        centermode: false,
        variableWidth: false,
        responsive: [
            {
                breakpoint: 768,
                settingd: {
                    // настрйоки при ширине 768
                }
            }, {
                breakpoint: 480,
                settingd: {
                    // настрйоки при ширине 480
                }
            }
        ]
    });
});

$(document).on('click', 'a', function (event) {
    event.preventDefault();

});