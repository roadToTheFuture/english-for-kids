import { dropDownMenu } from '@js/elements/main.js';
import { createDomElement } from '@js/utils/createDomElement.js';
import { MENU_LIST } from '@js/constants/elementsName.js';

export const menuList = createDomElement('ul', 'menu__list', '', dropDownMenu);

for (let item = 0; item < MENU_LIST.length; item += 1) {
  if (item === 0) {
    createDomElement('li', 'menu__category', MENU_LIST[item], menuList, 'main', 'main', true);
  } else {
    createDomElement('li', 'menu__category', MENU_LIST[item], menuList, 'item', `${MENU_LIST[item]}`, true);
  }
};
