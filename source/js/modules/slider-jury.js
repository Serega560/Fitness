const swiperJury = document.querySelector('[data-swiper="jury"]');
const swiperButtonPrev = document.querySelector('[data-swiper-button-prev="jury"]');
const swiperButtonNext = document.querySelector('[data-swiper-button-next="jury"]');

const initSwiperJury = () => {
  new window.Swiper(swiperJury, {

    // Параметры
    direction: 'horizontal',
    loop: true,
    effect: 'slider',

    // Кнопки
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },

    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.reviews-slide'
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

export {initSwiperJury};
