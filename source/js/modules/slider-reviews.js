const initSwiperReviews = () => {
  return new window.Swiper('.reviews-container', {

    // Параметры
    direction: 'horizontal',
    loop: true,
    effect: 'slider',

    // Кнопки
    navigation: {
      nextEl: '.reviews-slider__arrow--next',
      prevEl: '.reviews-slider__arrow--prev',
    },

    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.swiper-slide'
    },

    breakpoints: {
      1366: {
        slidesPerView: 1
      },

      1120: {
        slidesPerView: 1, spaceBetween: 20,
      },

      768: {
        slidesPerView: 2, spaceBetween: 32,
      },

      0: {
        slidesPerView: 1, spaceBetween: 32,
      },
    },

    grabCursor: true, slideToClickedSlide: true,
  });
}

export {initSwiperReviews};
