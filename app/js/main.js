import { isWebp, counter } from './utils.js';
import { infoSlider } from './sliders.js';

import './modals.js';
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

counter([
  {
    id: 'counterYears',
    count: 10,
    properties: {
      enableScrollSpy: true,
      duration: 3,
    },
  },
  {
    id: 'counterArea',
    count: 2000000,
    properties: {
      enableScrollSpy: true,
      separator: ' ',
      duration: 3,
      suffix: '<div class="suffix">м<sup>2</sup></div>',
    },
  },
  {
    id: 'couterProjects',
    count: 505,
    properties: {
      enableScrollSpy: true,
      duration: 3,
    },
  },
]);

// document.querySelector('#file-3').addEventListener('change', previewFile);
// function previewFile() {
//   const preview = document.querySelector('#file-3-preview');
//   const file = document.querySelector('#file-3').files[0];
//   const reader = new FileReader();

//   reader.onloadend = function () {
//     preview.src = reader.result;
//   };

//   if (file) {
//     reader.readAsDataURL(file);
//   } else {
//     preview.src = '#';
//   }
// }
