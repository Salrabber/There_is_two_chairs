$(function () {
    $('.header__btn').on('click', function(){
        $('.side-menu').removeClass('side-menu--close')
    });
    $('.side-menu__close-btn').on('click', function(){
        $('.side-menu').addClass('side-menu--close')
    })

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    })
})

