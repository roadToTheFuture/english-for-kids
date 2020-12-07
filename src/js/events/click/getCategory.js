import { WORDS_CATEGORY } from '@js/constants/elementsName.js';
import { container } from '@js/elements/main.js';

function getCategory(event) {
  const card = event.target.closest('.main-card');
  if (!card) return;

  const categoryIndex = WORDS_CATEGORY.indexOf(card.dataset.category);
  localStorage.setItem('wordCategory', `${categoryIndex}`);
}

container.addEventListener('click', getCategory);