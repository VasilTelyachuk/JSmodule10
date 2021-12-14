import itemsTemplate from '../templates/gallery-items.hbs';
import menuElement from '../menu.json';

const galleryRef = document.querySelector('.js-menu');

const markup = itemsTemplate(menuElement).trim();

galleryRef.insertAdjacentHTML('beforeend', markup);
