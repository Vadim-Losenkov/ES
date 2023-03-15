import { isWebp } from './utills.js';
isWebp();

import './form.js';

import Masonry from 'masonry-layout';

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
documentHeight();

const $grid = new Masonry('.projects__box', {
  itemSelector: '.projects__item',
  gutter: 50,
});
