$(function () {

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    $('.banner-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });

    $('.auto-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });


    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        arrows: true,
        prevArrow: ".right",
        nextArrow: ".left",
        autoplaySpeed: 2000,
    });

    //top scrollbar js

    $('.top-button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 })
    })

    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        if (scroll > 1000) {
            $('.top-button').fadeIn(500)
        } else {
            $('.top-button').fadeOut(500)

        }

    })



    //nicescroll js

    $('body').niceScroll({
        cursorcolor: "#18A7B9",
        cursorwidth: '10px',
        cursorborder: 'none',


    });

    $('.blogs-wrap').niceScroll({
        cursorcolor: "#18A7B9",
        cursorwidth: '10px',

    });


    //parllax js

    $('.parallax-window').parallax({ imageSrc: '/path/to/image.jpg' });


})


