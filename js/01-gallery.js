import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

// ------------Создать галлерею------------

function createGallery(galleryRef) {
    return galleryItems.map(galleryItem => {
        galleryRef.insertAdjacentHTML('beforeend', `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`);
    });
}
console.log(createGallery(galleryRef));

// -----Повесить слушателя coбытия клика по картинке-----------

galleryRef.addEventListener('click', onGalleryImgClick);

//---------------Oбработчик события------------------- 

function onGalleryImgClick(evt) {
  evt.preventDefault();

  const { dataset } = evt.target;

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${dataset.source}">
  `,);

  instance.show();

  // --------------Cлушатель события при открытии картинки--------------
  
  document.addEventListener('keyup', onEscapePress);

// ----------------Функция закрытия по ESC-----------------

  function onEscapePress(evt) {
  
  if (evt.code !== 'Escape') {
   
    return;
  }
  return instance.close();
}
}


console.log(galleryItems);