'use strict';

const slide = document.querySelector('.slide');

const openSlide = async function (e) {
  slide.classList.add('open');
};

const closeSlide = function async(e) {
  let svg = e.currentTarget.querySelector('.slide__indicator--open ion-icon');
  svg.style.transitionDelay = '0.2s';
  setTimeout(() => (svg.style.transitionDelay = '0s'), 200);
  slide.classList.remove('open');
};

slide.addEventListener('click', (e) => {
  if (!slide.classList.contains('open')) return openSlide(e);

  let arr = e.currentTarget.querySelector('.slide__indicator--close');
  if (e.target === arr) return closeSlide(e);
});
