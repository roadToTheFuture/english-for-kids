import { dropDownMenu, container } from '@js/elements/main.js';
import { generateCard } from '@js/utils/generateCard.js';
import { BASE_CARDS_DATA, WORDS_CATEGORY, AUDIO_EFFECTS } from '@js/constants/elementsName.js';
import { mode } from '@js/elements/switcher/switcher.js';
import { switcher, mistakes, burger } from '@js/elements/header/header.js';

function openOtherCategory(event) {
  const category = event.target.closest('li');
  if (!category) return;
  if (category.dataset.main) return;

  const categoryElement = category.dataset.item;
  if (!categoryElement) return;

  const cacategoryIndex = WORDS_CATEGORY.indexOf(categoryElement);
  const cardsAmount = BASE_CARDS_DATA[cacategoryIndex].length;

  const title = document.querySelector('.title');
  title.textContent = `${categoryElement}`;

  mistakes.innerHTML = '';
  container.innerHTML = '';
  mode.style.display = 'block';
  switcher.style.display = 'flex';
  burger.classList.remove('burgerActive');

  AUDIO_EFFECTS.click.play();

  for (let cardIndex = 0; cardIndex < cardsAmount; cardIndex += 1) {
    generateCard(`${BASE_CARDS_DATA[cacategoryIndex][cardIndex].word}`, `${BASE_CARDS_DATA[cacategoryIndex][cardIndex].translation}`, `${BASE_CARDS_DATA[cacategoryIndex][cardIndex].image}`, `${BASE_CARDS_DATA[cacategoryIndex][cardIndex].audioSrc}`);
  }
}

dropDownMenu.addEventListener('click', openOtherCategory);
