// HEADER
$(function () {
    $(".sub").hide();
});
$(".gnb>li").mouseenter(function () {
    $(".sub").stop().slideDown();
});
$(".gnb>li").mouseleave(function () {
    $(".sub").stop().slideUp();
});

// CONTENT3
var swiper = new Swiper(".mySwiper1", {
    speed: 800,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: "#content3_wrap .swiper-pagination",
        clickable: true,
    },
});



new Swiper('.productSwiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    navigation: {
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next'
    }
});

    var swiper = new Swiper(".mySwiper2", {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper3", {
      loop: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
