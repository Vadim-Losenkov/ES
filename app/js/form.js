import VanillaMasker from 'vanilla-masker';

const $phoneInputs = document.querySelectorAll('[data-input="phone"]');

$phoneInputs.forEach(($phoneInput) => {
  VanillaMasker($phoneInput).maskPattern('+9 (999) 999-9999');
});

// Необходимые действия при клике на checkbox
const $checkbox = document.querySelector('.about__form-warning input[type="checkbox"]');
$checkbox.addEventListener('click', function () {
  if ($checkbox.checked) {
    // действия, если checkbox отмечен
  } else {
    // действия, если checkbox не отмечен
  }
});

const inputs = document.querySelectorAll('.fileBanner__form-fileInput');
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling,
    labelVal = label.innerHTML;

  input.addEventListener('change', function (e) {
    console.log(label);
    var fileName = '';
    if (this.files && this.files.length > 1)
      fileName = (this.getAttribute('data-multiple-caption') || '').replace(
        '{count}',
        this.files.length,
      );
    else fileName = e.target.value.split(`\\`).pop();

    if (fileName) {
      label.classList.add('active');
    } else {
      // label.innerHTML = labelVal;
    }
  });
});
