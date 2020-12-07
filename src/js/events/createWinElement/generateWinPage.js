import { generateCard } from '@js/utils/generateCard.js';
import { BASE_CARDS_DATA, WORDS_CATEGORY, AUDIO_EFFECTS } from '@js/constants/elementsName.js';
import { container } from '@js/elements/main.js';
import { mode } from '@js/elements/switcher/switcher.js';

function openCategory(event) {
  AUDIO_EFFECTS.click.play();
}
