import { createDomElement } from '@js/utils/createDomElement.js';
import { header } from '@js/elements/main.js';

const burger = createDomElement('div', 'burger-menu', '', header);
const mistakes = createDomElement('div', 'mistakes', '', header);
const switcher = createDomElement('div', 'switcher', '', header);

export {
  burger, switcher, mistakes,
};
