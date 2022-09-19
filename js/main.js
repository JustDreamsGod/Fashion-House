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

/* BURGER */

$(document).ready(function () {
    $('.menu-burger__header').click(function () {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__menu').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});

$(document).on('click', 'a', function (event) {

    event.preventDefault();

});

