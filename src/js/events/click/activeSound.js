import { mode } from '@js/elements/switcher/switcher.js';

const container = document.querySelector('.container');
const gameMode = document.querySelector('.switcher__checkbox');

function readWord(event) {
  const card = event.target.closest('.card');
  if (!card) return;
  if (!container.contains(card)) return;
  const categoryElement = card.dataset.category;
  if (categoryElement) return;

  const cardAttribute = card.dataset.word;
  const sound = document.getElementById(`${cardAttribute}`);
  const reverseButton = event.target.closest('span');
  const backCard = event.target.closest('.card__side-b');

  localStorage.setItem('activeWord', `${cardAttribute}`);

  if (!sound || reverseButton || backCard || gameMode === 'play' || mode.classList.contains('active')) return;
  sound.play();
}

container.addEventListener('click', readWord);
