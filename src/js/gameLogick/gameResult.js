import { container } from '@js/elements/main.js';
import { mode } from '@js/elements/switcher/switcher.js';
import { mistakes } from '@js/elements/header/header.js';
import { createDomElement } from '@js/utils/createDomElement.js';
import { ENDS_GAME_IAMGE, AUDIO_EFFECTS } from '@js/constants/elementsName.js';

function areYouWin(event) {
  const card = event.target.closest('.card');
  if (!card) return;
  if (!mode.classList.contains('active')) return;

  const audiosInThePage = [...document.querySelectorAll('.card__side-f')];
  const allCardChacked = audiosInThePage.filter((element) => element.classList.contains('checked'));

  const audiosAmount = audiosInThePage.length - 1;
  const checkedCards = allCardChacked.length;

  if (audiosAmount === checkedCards) createResultPage();
}

container.addEventListener('click', areYouWin);

function createResultPage() {
  const mistakesArr = [...document.querySelectorAll('.mistake')];
  mistakes.innerHTML = '';
  container.innerHTML = '';

  container.classList.add('resultContent');

  const resultElement = createDomElement('div', 'result', '', container);
  const picture = createDomElement('div', 'picture', '', resultElement);
  const info = createDomElement('span', 'info', '', resultElement);
  const goMainPage = createDomElement('span', 'mainPage', 'Main Page', resultElement);

  if (mistakesArr.length === 0) {
    picture.style.backgroundImage = `url(${ENDS_GAME_IAMGE.winGame})`;
    info.textContent = 'You Win';
    AUDIO_EFFECTS.winGame.play();
  } else {
    picture.style.backgroundImage = `url(${ENDS_GAME_IAMGE.loseGame})`;
    info.textContent = `${mistakesArr.length} Mistakes`;
    AUDIO_EFFECTS.loseGame.play();
  }
}