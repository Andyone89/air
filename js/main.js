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
        speed: 900,       
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 950,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              }
        ]
    });
});
$(function () {
    $('.membership__slider').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        speed: 900,       
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                autoplay: true
              }
            },
        ]
    })
});
if(window.innerWidth < 768) {
    mobileOnlySlider();}