'use strict';

$(document).ready(function () {
  const $inputPrice = document.getElementById('price');
  const $inputMonths = document.getElementById('months');
  const $priceSlider = document.getElementById('price-slider');
  const $priceResult = document.getElementById('price-result');
  const $monthsResult = document.getElementById('months-result');

  let indentMonths = () => {
    $monthsResult.textContent = prettify(Math.floor($inputPrice.value * 1000 / $inputMonths.value))  + ' ₽';
  }

  $inputPrice.addEventListener('input', () => {
    $priceSlider.textContent = prettify($inputPrice.value * 1000) + ' ₽';
    $priceResult.textContent = prettify($inputPrice.value * 1000) + ' ₽';
    indentMonths();
  });

  $inputMonths.addEventListener('input', indentMonths);

  let prettify = (num) => {
    let n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
  }
});