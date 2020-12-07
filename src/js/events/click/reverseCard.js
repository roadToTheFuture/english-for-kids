import { AUDIO_EFFECTS } from '@js/constants/elementsName.js';
const container = document.querySelector('.container');

function reverseCard(event) {
  const reverseButton = event.target.closest('.card__reverse');
  if (!reverseButton) return;

  const card = event.target.closest('.card');
  if (!card) return;
  if (!container.contains(card)) return;

  AUDIO_EFFECTS.click.play();

  const cardAttribute = card.dataset.word;

  const frontCard = event.target.closest('.card__side-f');
  const backCard = document.getElementById(`${cardAttribute}CardBack`);

  frontCard.style.transform = "rotateY(-180deg)";
  backCard.style.transform = "rotateY(0deg)";

  backCard.onmouseleave = () => {
    frontCard.style.transform = "rotateY(0deg)";
    backCard.style.transform = "rotateY(180deg)";
  };
}

container.addEventListener('click', reverseCard);
