$(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .menu, .header').toggleClass('active');
    });
});

$(function () {
    $('.charters__slider').slick({
        Infinie: true,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
});