import { mode, activeSound } from '@js/elements/switcher/switcher.js';
import { GAME_MODE, AUDIO_EFFECTS } from '@js/constants/elementsName.js';
import { mistakes } from '@js/elements/header/header.js';
import { sayWord } from '@js/gameLogick/sayWord.js';

function prepareCardForGame(event) {
  const audiosInThePage = [...document.querySelectorAll('audio')];
  const button = event.target.closest('.game');
  if (!button) return;

  AUDIO_EFFECTS.click.play();

  const playCard = document.querySelectorAll('.card__info-en');
  const clearCard = document.querySelectorAll('.card__side-f');

  if (button.classList.contains('active')) {
    playCard.forEach((elem) => elem.style.display = 'flex');
    clearCard.forEach((elem) => elem.classList.remove('checked'));
    audiosInThePage.forEach((elem) => elem.classList.add('play'));

    button.classList.remove('active');
    button.textContent = `${GAME_MODE.train}`;

    activeSound.style.display = 'none';
    mistakes.innerHTML = '';
  } else {
    playCard.forEach(elem => elem.style.display = 'none');
    button.classList.add('active');
    button.textContent = `${GAME_MODE.play}`;
    activeSound.style.display = 'flex';

    sayWord();
  }
}

mode.addEventListener('click', prepareCardForGame);
