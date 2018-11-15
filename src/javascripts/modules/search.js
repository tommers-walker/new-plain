import { utils } from './utils';
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

const search = {
  init() {
    searchBtn.addEventListener('click', function(e) {
      e.preventDefault();
      utils.toggleClass(searchInput, 'is-active')
      utils.hasClass(searchInput, 'is-active') ? searchInput.focus() : searchInput.blur();
    });
  }
}

export { search }
