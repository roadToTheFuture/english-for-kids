import { generateCard } from '@js/utils/generateCard.js';
import { CARDS_FOR_MAIN_PAGE, AUDIO_EFFECTS, } from '@js/constants/elementsName.js';
import { muteSound } from '@js/elements/switcher/switcher.js';

setTimeout(() => AUDIO_EFFECTS.startMelody.play(), 2000);

CARDS_FOR_MAIN_PAGE.forEach((element) => {
  generateCard(element.word, '', element.image, '', `${element.word}`);
});

function mutedSound() {
  muteSound.classList.toggle('soundIsMute');

  if (muteSound.classList.contains('soundIsMute')) {
    muteSound.innerHTML = '&#128263;';
    AUDIO_EFFECTS.startMelody.pause();
  } else {
    muteSound.innerHTML = '&#128264;';
    AUDIO_EFFECTS.startMelody.play();
  }
}

muteSound.addEventListener('click', mutedSound);