import { generateArrWithAudio } from '@js/gameLogick/randomWord.js';
import { activeSound } from '@js/elements/switcher/switcher.js';
import { AUDIO_EFFECTS } from '@js/constants/elementsName.js';

function replay(event) {
  const replayButton = event.target.closest('.sound-active');
  if (!replayButton) return;

  const soundArr = generateArrWithAudio();
  if (soundArr.length === 0) return;

  const soundIndex = activeSound.dataset.audioIndex;
  AUDIO_EFFECTS.click.play();
  soundArr[soundIndex].play();
}

activeSound.addEventListener('click', replay);