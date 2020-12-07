import { switcher } from '@js/elements/header/header.js';
import { createDomElement } from '@js/utils/createDomElement.js';
import { GAME_MODE } from '@js/constants/elementsName.js';

const muteSound = createDomElement('button', 'mute-sound', '', switcher);
muteSound.innerHTML = '&#128264;';
const activeSound = createDomElement('button', 'sound-active', '', switcher, 'soundActive', 'play', true);
activeSound.innerHTML = '&#10227;';
activeSound.style.display = 'none';

const mode = createDomElement('button', 'game', `${GAME_MODE.train}`, switcher, 'state', `${GAME_MODE.train}`, true);
mode.style.display = 'none';

export {
  activeSound, mode, muteSound,
};
