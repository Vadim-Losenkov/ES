import Swiper, { Autoplay, EffectFade, Pagination } from 'swiper';

export const infoSlider = new Swiper('.info__slider', {
  modules: [Pagination, EffectFade, Autoplay],
  effect: 'fade',
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.info__slider-pagination',
    type: 'progressbar',
  },
});
