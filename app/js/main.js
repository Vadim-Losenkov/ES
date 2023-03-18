import { isWebp } from './utils.js';
import { infoSlider } from './sliders.js';

import './form.js';
import './grid.js';

isWebp();
infoSlider;

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
documentHeight();

const $headerScrollTop = document.querySelector('.header.scroll-top');
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function () {
  if ((window.pageYOffset || document.documentElement.scrollTop) > 400) {
    if ((window.pageYOffset || document.documentElement.scrollTop) > (lastScrollTop || 0)) {
      // Пользователь прокручивает страницу вниз
      $headerScrollTop.classList.remove('active');
    } else {
      $headerScrollTop.classList.add('active');
    }
  } else {
    $headerScrollTop.classList.remove('active');
  }
  lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
});
