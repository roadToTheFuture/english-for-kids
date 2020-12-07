import { createDomElement } from '@js/utils/createDomElement.js';

const header = createDomElement('header', '', '', document.body);

const content = createDomElement('section', 'content', '', document.body);
const title = createDomElement('h1', 'title', 'Train & Play', content);
const container = createDomElement('div', 'container', '', content);

const dropDownMenu = createDomElement('nav', 'drop-down menu', '', document.body);

const footer = createDomElement('footer', '', '', document.body);

export {
  header, content, footer, container, dropDownMenu, title,
};
