'use strict';
// Заполнение цветом уже выбранного диапозона

$(document).ready(function () {
  let setupCustomInputRange = (element) => {
    const $input = element.getElementsByClassName('custom-input-range__input')[0];
    const $fill = element.getElementsByClassName('custom-input-range__fill')[0] || false;

    let fillRange = () => {
      if ($fill) {
        $fill.style.width = (($input.value - $input.min) / (($input.max - $input.min))) * 100 + '%'
      };
    };

    fillRange();
    $input.addEventListener('input', fillRange, false);
  }

  let $inputs = document.getElementsByClassName('custom-input-range');

  for (let i = 0; i < $inputs.length; i++) {
    setupCustomInputRange($inputs[i]);
  }
});