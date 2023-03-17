import { isWebp } from './utills.js';
import Swiper, { Autoplay, EffectFade, Pagination } from 'swiper';
isWebp();

import './form.js';
import './grid.js';

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
documentHeight();

const infoSlider = new Swiper('.info__slider', {
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
