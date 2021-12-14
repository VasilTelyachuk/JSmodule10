import itemsTemplate from '../templates/gallery-items.hbs';
import menuItem from '../menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menuItem).trim();

galleryRef.insertAdjacentHTML('beforeend', markup);
