import { activeSound, mode } from '@js/elements/switcher/switcher.js';
import { AUDIO_EFFECTS } from '@js/constants/elementsName.js';
import { mistakes } from '@js/elements/header/header.js';
import { createDomElement } from '@js/utils/createDomElement.js';
import { sayWord } from '@js/gameLogick/sayWord.js';

function checkRightCard(event) {
  const card = event.target.closest('.card');
  const cardFrontSide = event.target.closest('.card__side-f');

  if (!card) return;
  if (!mode.classList.contains('active')) return;

  const cardWord = card.dataset.word;
  const rightAnswer = activeSound.dataset.rightWord;
  const sound = document.getElementById(`${cardWord}`);

  if (cardWord === rightAnswer && !cardFrontSide.classList.contains('checked')) {
    AUDIO_EFFECTS.rightWord.play();
    activeSound.classList.remove('activate');
    sound.classList.remove('play');
    cardFrontSide.classList.add('checked');

    setTimeout(sayWord, 1000);
  } else if (!cardFrontSide.classList.contains('checked')) {
    AUDIO_EFFECTS.error.play();
    const cansle = createDomElement('span', 'mistake', '', mistakes);
    cansle.innerHTML = '&#10060;';
  }
}

document.body.addEventListener('click', checkRightCard);