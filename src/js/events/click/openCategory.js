import { generateCard } from '@js/utils/generateCard.js';
import { BASE_CARDS_DATA, WORDS_CATEGORY, AUDIO_EFFECTS } from '@js/constants/elementsName.js';
import { container } from '@js/elements/main.js';
import { mode } from '@js/elements/switcher/switcher.js';

function openCategory(event) {
  const card = event.target.closest('.card');
  if (!card) return;
  if (!container.contains(card)) return;

  const categoryElement = card.dataset.category;
  if (!categoryElement) return;

  const cacategoryIndex = WORDS_CATEGORY.indexOf(categoryElement);
  const cardsAmount = BASE_CARDS_DATA[cacategoryIndex].length;

  const title = document.querySelector('.title');
  title.textContent = `${categoryElement}`;

  AUDIO_EFFECTS.click.play();

  container.innerHTML = '';
  mode.style.display = 'block';



  for (let cardIndex = 0; cardIndex < cardsAmount; cardIndex += 1) {
    generateCard(`${BASE_CARDS_DATA[cacategoryIndex][cardIndex].word}`, `${BASE_CARDS_DATA[cacategoryIndex][cardIndex].translation}`, `${BASE_CARDS_DATA[cacategoryIndex][cardIndex].image}`, `${BASE_CARDS_DATA[cacategoryIndex][cardIndex].audioSrc}`);
  }
}

container.addEventListener('click', openCategory);