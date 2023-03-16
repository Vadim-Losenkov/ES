import { isWebp } from './utills.js';
isWebp();

import './form.js';
import './grid.js';

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
documentHeight();
