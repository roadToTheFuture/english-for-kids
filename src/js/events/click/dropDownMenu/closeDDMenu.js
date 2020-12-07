import { dropDownMenu, container } from '@js/elements/main.js';
import { burger } from '@js/elements/header/header.js';

function openOtherCategory(event) {

  const coverCategory = event.target.closest('li');
  if (!coverCategory) return;

  if (coverCategory) {
    dropDownMenu.style.transform = 'translateX(-100%)';
    dropDownMenu.classList.remove('active');

    burger.classList.remove('active');
    burger.style.position = 'relative';
  }



}

document.addEventListener('click', openOtherCategory);