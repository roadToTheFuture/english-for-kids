import { createDomElement } from '@js/utils/createDomElement.js';
import { container } from '@js/elements/main.js';
import {
  ELEMENT_URL, WORDS_CATEGORY, BASE_CARDS_DATA, REVERSE_BTN_ICO,
} from '@js/constants/elementsName.js';

export function generateCard(wordEn, wordRu, img, soundEn, category) {
  let card = null;

  card = createDomElement('div', 'card', '', container, 'word', `${wordEn.toLowerCase().trim()}`, true);

  const cardImgFront = createDomElement('div', 'card__img-front', '', '', 'image', 'front', true);
  cardImgFront.style.backgroundImage = `url(${ELEMENT_URL}${img})`;
  const cardImgBack = createDomElement('div', 'card__img-back', '', '', 'image', 'back', true);
  if (!category) cardImgBack.style.backgroundImage = `url(${ELEMENT_URL}${img})`;

  const cardInfoFront = createDomElement('div', 'card__info-en', '');
  const cardInfoBack = createDomElement('div', 'card__info-ru', '');

  const cardWordFront = createDomElement('h2', 'card__word-en', '', cardInfoFront, 'enWord', `${wordEn}`, true);
  const cardWordBack = createDomElement('h2', 'card__word-ru', '', cardInfoBack, 'ruWord', `${wordRu}`, true);
  const cardReverseBtn = createDomElement('span', 'card__reverse', '', cardInfoFront, 'reverse', 'disable', true);

  cardReverseBtn.innerHTML = `${REVERSE_BTN_ICO}`;
  cardWordFront.textContent = `${wordEn}`;
  cardWordBack.textContent = `${wordRu}`;

  const audioTag = createDomElement('audio', 'card__sound play', '', cardInfoFront, 'cardWord', `${wordEn.toLowerCase()}`, true);
  audioTag.setAttribute('id', `${wordEn.toLowerCase()}`);
  const cardSound = createDomElement('source', '', '', audioTag, 'src', `${ELEMENT_URL}${soundEn}`, false);

  const frontCard = createDomElement('div', 'card__side-f', [cardImgFront, cardInfoFront], card);
  const backCard = createDomElement('div', 'card__side-b', [cardImgBack, cardWordBack], card, 'id', `${wordEn.toLowerCase()}CardBack`, false);

  if (category) {
    const cardsAmount = howManyCards(category);
    createDomElement('span', 'card__amount', `${cardsAmount} cards`, cardInfoFront, 'amount', `${wordEn}`, true);

    card.dataset.category = `${wordEn}`;
    card.classList.add('main-card');
    cardReverseBtn.style.display = 'none';
    backCard.innerHTML = '';
    cardSound.innerHTML = '';
    audioTag.innerHTML = '';
    frontCard.classList.add('card__main');
    cardImgFront.classList.add('card__main-image');
    cardInfoFront.classList.add('card__info-main');
  }

  return card;
}

function howManyCards(category) {
  let categoryIndex = 0;

  if (WORDS_CATEGORY.includes(category)) {
    categoryIndex = WORDS_CATEGORY.indexOf(category);
  } else {
    throw new Error('This category does not exis');
  }

  return BASE_CARDS_DATA[categoryIndex].length;
}
