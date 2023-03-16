import Masonry from 'masonry-layout';

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
};

let $grid = new Masonry($container, {
  itemSelector: '.grid-item:not(.hidden)',
  gutter: 50,
});

$container.addEventListener('click', (event) => {
  if (event.target.closest('[data-grid-open="loadMore"]')) {
    loadItems(event);
  } else if (event.target.closest('[data-grid-close="loadMore"]')) {
    removeItems(event);
  }
});
