import { dropDownMenu } from '@js/elements/main.js';
import { burger } from '@js/elements/header/header.js';
import { AUDIO_EFFECTS } from '@js/constants/elementsName.js';
import { switcher } from '@js/elements/header/header.js';

function burgerAnimation(event) {
  if (burger.classList.contains('active')) {
    dropDownMenu.style.transform = 'translateX(-100%)';
    dropDownMenu.classList.remove('active');
    switcher.style.display = 'flex';

    burger.classList.remove('active');
    burger.style.position = 'relative';
  } else {
    dropDownMenu.style.transform = 'translateX(0)';
    dropDownMenu.classList.add('active');

    burger.classList.add('active');
    burger.style.position = 'fixed';
    switcher.style.display = 'none';
  }
  burger.classList.toggle('burgerActive');
  const element = event.target.closest('ul');



  AUDIO_EFFECTS.click.play();
}

burger.addEventListener('click', burgerAnimation);