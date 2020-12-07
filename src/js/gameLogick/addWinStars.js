import { mode } from '@js/elements/switcher/switcher.js';

function createStar() {
  if (!mode.classList.contains('active')) return;

  const wordCategoryIndex = localStorage.getItem('wordCategory');
}


mode.addEventListener('click', createStars);