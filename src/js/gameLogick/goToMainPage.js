import { container } from '@js/elements/main.js';
import { generateCard } from '@js/utils/generateCard.js';
import { CARDS_FOR_MAIN_PAGE, AUDIO_EFFECTS } from '@js/constants/elementsName.js';
import { mode, activeSound } from '@js/elements/switcher/switcher.js';
import { mistakes } from '@js/elements/header/header.js';

function goToMainPage(event) {
  const mainPAge = event.target.closest('.mainPage');
  if (!mainPAge) return;

  mistakes.innerHTML = '';
  container.innerHTML = '';
  mode.style.display = 'none';
  mode.classList.remove('active');
  activeSound.style.display = 'none';
  container.classList.remove('resultContent');
  const title = document.querySelector('.title');
  title.textContent = 'train & play';

  AUDIO_EFFECTS.click.play();

  CARDS_FOR_MAIN_PAGE.forEach((element) => {
    generateCard(element.word, '', element.image, '', `${element.word}`);
  });
}

document.body.addEventListener('click', goToMainPage);