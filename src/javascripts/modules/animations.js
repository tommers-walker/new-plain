import { TweenLite, TimelineLite } from 'gsap';

const headerLogo = document.querySelector('.js-header-logo');
const navMenu = document.querySelector('#js-nav-menu');
const navItems = Array.from(document.querySelectorAll('.js-nav-item'));
const headerItems = [headerLogo].concat(navItems);

const animations = {
  headerAnimTl() {
    const headerAnimTl = new TimelineLite({ paused: true });
    headerAnimTl.staggerFromTo(headerItems, 0.5, {autoAlpha: 0, y: -10}, {autoAlpha: 1, y: 0}, 0.1);
    return headerAnimTl;
  },

  mobileMenuTl() {
    const mobileMenuTl = new TimelineLite({ paused: true });
    mobileMenuTl
      .fromTo(navMenu, 0.2, {autoAlpha: 0}, {autoAlpha: 1})
      .staggerFromTo(navItems, 0.2, {autoAlpha: 0, x: -10}, {autoAlpha: 1, x: 0}, 0.1);
    return mobileMenuTl;
  },

  init() {
    this.headerAnimTl().play();
  }
}

export { animations }
