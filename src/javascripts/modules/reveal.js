import { utils } from './utils';
import inView from 'in-view';

const reveal = {
  init() {
    const onLoadElements = document.querySelectorAll(`[data-reveal-onload]`);
    const windowHeight = document.documentElement.clientHeight || window.outerHeight;

    setTimeout(() => {
      utils.forEach(onLoadElements, (index, el) => {
        el.classList.add(`is-visible`);
      });
    }, 100);

    inView(`[data-reveal-slide], [data-reveal-fade]`)
      .on(`enter`, el => {
        el.classList.add(`is-visible`);
      });

    inView(`[data-reveal-group]`)
      .on(`enter`, el => {
        const childEls = Array.from(el.children);

        utils.forEach(childEls, (index, childEl) => {
          setTimeout(() => {
            childEl.classList.add(`is-visible`);
          }, index*100)
        });
      });

    inView.offset(windowHeight * 0.1);
  }
};

export { reveal }
