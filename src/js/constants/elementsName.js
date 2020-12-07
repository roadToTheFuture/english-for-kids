import { cards } from '@js/constants/cards.js';

const GAME_MODE = {
  play: 'playing',
  train: 'training',
};

const MENU_LIST = cards[0];
const WORDS_CATEGORY = cards[0].filter((elem, index) => index !== 0);
const CARDS_FOR_MAIN_PAGE = cards[1];
const BASE_CARDS_DATA = cards[2];

const ELEMENT_URL = 'https://raw.githubusercontent.com/roadToTheFuture/english-for-kids.data/main/';

const REVERSE_BTN_ICO = '&#10226;';

const AUDIO_EFFECTS = {
  winGame: new Audio(`${ELEMENT_URL}effects/winGame.mp3`),
  loseGame: new Audio(`${ELEMENT_URL}effects/loseGame.mp3`),
  rightWord: new Audio(`${ELEMENT_URL}effects/rightWord.mp3`),
  error: new Audio(`${ELEMENT_URL}effects/error.mp3`),
  startMelody: new Audio(`${ELEMENT_URL}effects/startMelody.mp3`),
  click: new Audio(`${ELEMENT_URL}effects/click.mp3`),
};

const ENDS_GAME_IAMGE = {
  winGame: `${ELEMENT_URL}img/endGame/win.png`,
  loseGame: `${ELEMENT_URL}img/endGame/lose.png`,
};

export {
  GAME_MODE, ELEMENT_URL, WORDS_CATEGORY, CARDS_FOR_MAIN_PAGE,
  BASE_CARDS_DATA, REVERSE_BTN_ICO, MENU_LIST, AUDIO_EFFECTS,
  ENDS_GAME_IAMGE,
};
