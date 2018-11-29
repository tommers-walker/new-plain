import { utils } from './utils';
import { animations } from './animations';

const menuBtn = document.querySelector('#js-menu-btn');
const navMenu = document.querySelector('#js-nav-menu');

const toggleMenu = () => {
  if (!utils.hasClass(navMenu, 'is-active')) {
    animations.mobileMenuTl().play();
    utils.addClass(navMenu, 'is-active');
  } else {
    const reverseTl = animations.mobileMenuTl();

    reverseTl.eventCallback("onReverseComplete", () => {
      utils.removeClass(navMenu, 'is-active');
    });

    reverseTl.reverse(0);
  }
}

const menu = {
  init() {
    menuBtn.addEventListener('click', (e) => {
      utils.toggleClass(menuBtn, 'is-active');
      utils.toggleClass(document.body, 'menu-is-active');
      toggleMenu();
    });
  }
}

export { menu }
