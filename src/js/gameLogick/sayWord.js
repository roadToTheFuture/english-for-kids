import { activeSound } from '@js/elements/switcher/switcher.js';
import { randomNumber } from '@js/gameLogick/randomNumber.js';
import { generateArrWithAudio } from '@js/gameLogick/randomWord.js';

export function sayWord() {
  const activeWords = generateArrWithAudio();

  if (activeWords.length === 0) return;

  const randomIndex = randomNumber(activeWords.length);
  const audio = activeWords[randomIndex];
  const word = activeWords[randomIndex].dataset.cardWord;

  activeSound.dataset.audioIndex = `${randomIndex}`;
  activeSound.dataset.rightWord = `${word}`;
  audio.play();
}