import { dropDownMenu, container } from '@js/elements/main.js';
import { generateCard } from '@js/utils/generateCard.js';
import { CARDS_FOR_MAIN_PAGE, AUDIO_EFFECTS } from '@js/constants/elementsName.js';
import { mode, activeSound } from '@js/elements/switcher/switcher.js';
import { mistakes, burger } from '@js/elements/header/header.js';

function openMainPage(event) {
  const mainPAge = event.target.closest('li');
  if (!mainPAge) return;
  if (!dropDownMenu.contains(mainPAge)) return;
  if (!mainPAge.dataset.main) return;

  mistakes.innerHTML = '';
  container.innerHTML = '';
  mode.style.display = 'none';
  mode.classList.remove('active');
  activeSound.style.display = 'none';
  burger.classList.remove('burgerActive');

  const title = document.querySelector('.title');
  title.textContent = 'train & play';

  AUDIO_EFFECTS.click.play();

  CARDS_FOR_MAIN_PAGE.forEach((element) => {
    generateCard(element.word, '', element.image, '', `${element.word}`);
  });
}

dropDownMenu.addEventListener('click', openMainPage);
