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

