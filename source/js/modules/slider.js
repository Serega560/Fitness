import Swiper from "../vendor/swiper.js";

const initSwiper = () => {
  new Swiper('.swiper-container', {

    // Параметры
    direction: 'horizontal',
    loop: true,
    effect: 'slider',

    // Кнопки
    navigation: {
      nextEl: '.swiper-slider__arrow--next',
      prevEl: '.swiper-slider__arrow--prev',
    },

    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.swiper-slide'
    },

    breakpoints: {
      1366: {
        slidesPerView: 4, spaceBetween: 40,
      },

      1120: {
        slidesPerView: 3, spaceBetween: 70,
      },

      768: {
        slidesPerView: 2, spaceBetween: 32,
      }, 0: {
        slidesPerView: 1, spaceBetween: 32,
      },
    },

    grabCursor: true, slideToClickedSlide: true,
  });
}

export {initSwiper};
