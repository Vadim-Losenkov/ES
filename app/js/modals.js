import $ from 'jquery';
import './plugins/magnific-popup.js';

const documentWidth = parseInt(document.documentElement.clientWidth);
const windowsWidth = parseInt(window.innerWidth);

const scrollbarWidth = windowsWidth - documentWidth;
['.open-popup'].forEach((selector) => {
  $(selector).magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      },
      open: function () {
        // $('.top__contacts').css({ right: `${scrollbarWidth + 16}px`, transition: '0s' });
        $(document.body).css({ paddingRight: `${scrollbarWidth}px`, transition: '0s' });
        $(document.body).addClass('open-popup');
      },
      close: function () {
        // $('.top__contacts').css({ right: `${16}px`, transition: '0s' });
        $(document.body).css({ paddingRight: 0 });
        $(document.body).removeClass('open-popup');
      },
      afterClose: function () {
        $(document.body).css({ transition: 'all .3s' });
      },
    },
    midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  $('.open-popup').on('click', function (e) {
    e.preventDefault();
  });
  $('[data-popup="close"]').on('click', (e) => {
    e.preventDefault();
    $(selector).magnificPopup('close');
  });
});
