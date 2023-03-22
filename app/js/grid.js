import Masonry from 'masonry-layout';
import { onChangeWindow } from './utils.js';

const $container = document.querySelector('.projects__box');

const newElements = [...document.querySelectorAll('.hidden-grid-items .grid-item')];
const hiddenElements = Array.from($container.querySelectorAll('.grid-item')).slice(-2);

const loadItems = (event) => {
  event.preventDefault();

  hiddenElements.forEach(function (element) {
    $grid.remove(element);
    $grid.layout();
  });

  newElements.forEach(function (element, index) {
    // Добавление элемента в сетку Masonry
    $container.appendChild(element);
    // Перезапуск Masonry после добавления нового элемента
    $grid.appended(element);

    // Добавление анимации появления элемента с задержкой
    setTimeout(function () {
      element.classList.add('is-visible');
    }, 100 * index);
  });
  // changeFormPosition();
};

const removeItems = (event) => {
  event.preventDefault();

  newElements.forEach(function (element, index) {
    element.classList.remove('is-visible');

    $grid.remove(element);
    $grid.layout();
  });
  hiddenElements.forEach(function (element, index) {
    // Добавление элемента в сетку Masonry
    $container.appendChild(element);
    // Перезапуск Masonry после добавления нового элемента
    $grid.appended(element);

    // Добавление анимации появления элемента с задержкой
    setTimeout(function () {
      element.classList.add('is-visible');
    }, 100 * index);
  });

  window.scrollTo({
    top: $container.offsetTop + $container.offsetHeight - 500,
    behavior: 'smooth',
  });
  setTimeout(() => {
    changeFormPosition();
  }, 500);
};

let $grid = new Masonry($container, {
  itemSelector: '.grid-item:not(.hidden)',
  gutter: 50,
  percentPosition: true,
});

$container.addEventListener('click', (event) => {
  if (event.target.closest('[data-grid-open="loadMore"]')) {
    loadItems(event);
  } else if (event.target.closest('[data-grid-close="loadMore"]')) {
    removeItems(event);
  }
});

const $gridForm = document.querySelector('[data-load="formIncr"]');
const $gridButton = document.querySelector('[data-load="incr"]');

function changeFormPosition() {
  if (window.innerWidth <= 768) {
    // Находим элементы, которые нужно поменять местами
    var item1 = $gridForm;
    var item2 = $gridButton;

    $container.removeChild(item1);
    $container.removeChild(item2);

    // Меняем элементы местами в DOM
    $container.insertAdjacentElement('beforeend', item2);
    $container.insertAdjacentElement('beforeend', item1);

    // Обновляем Masonry.js
    $grid = new Masonry($container, {
      itemSelector: '.grid-item:not(.hidden)',
      gutter: 50,
      percentPosition: true,
    });

    $grid.layout();

    // Добавляем элементы обратно в каскадную сетку
    $container.appendChild(item1);
    $container.appendChild(item2);
  }
}

onChangeWindow(changeFormPosition);
