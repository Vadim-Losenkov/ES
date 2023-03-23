import { infoSlider } from './sliders.js';
import { isWebp, onChangeWindow } from './utils.js';

import './modals.js';
import './form.js';
import './grid.js';

isWebp();
infoSlider;

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
onChangeWindow(documentHeight);

const $burger = document.querySelector('.header__burger');
const $header = document.querySelector('.header:not(.scroll-top)');
const $headerMobile = document.querySelector('.header-mobile');

$burger.addEventListener('click', function (e) {
  [this, $headerMobile, $header].forEach(($el) => $el.classList.toggle('active'));
  document.body.classList.toggle('open-popup');
});

const $headerScrollTop = document.querySelector('.header.scroll-top');
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;

function scrollHeader() {
  function showHeader() {
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
  }

  if (window.innerWidth >= 960) {
    window.addEventListener('scroll', showHeader);
  } else {
    window.removeEventListener('scroll', showHeader);
    $headerScrollTop.classList.remove('active');
  }
}

onChangeWindow(scrollHeader);
