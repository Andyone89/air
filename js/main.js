$(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, .menu, .header').toggleClass('active');
    });
});

$(function () {
    $('.charters__slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        speed: 300,        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
        ]
    });
});