import { isWebp } from './utills.js';
isWebp();

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
documentHeight();
