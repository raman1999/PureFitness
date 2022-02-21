var slider = document.querySelector('#slider')
  var label = document.querySelector('#slider-value')
  label.innerHTML = slider.value;
  slider.style.background = 'linear-gradient(90deg, var(--txtSecondary) ' + slider.value / 100 + '%, var(--bgLight) 0%)'
  slider.oninput = function () {
    label.innerHTML = slider.value;
    slider.style.background = 'linear-gradient(90deg, var(--txtSecondary) ' + slider.value / 100 + '%, var(--bgLight) 0%)'
  }