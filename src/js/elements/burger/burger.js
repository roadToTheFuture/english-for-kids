import { burger } from '@js/elements/header/header.js';
import { createDomElement } from '@js/utils/createDomElement.js';

const burgerFirstLine = createDomElement('div', 'burger-menu__line', '', burger);
const burgerSecondLine = createDomElement('div', 'burger-menu__line', '', burger);
const burgerThirdLine = createDomElement('div', 'burger-menu__line', '', burger);

export {
  burgerFirstLine, burgerSecondLine, burgerThirdLine,
};
