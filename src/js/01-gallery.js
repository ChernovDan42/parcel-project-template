// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const galleryListRef = document.querySelector('.gallery');
const imagesMarkup = createImgMarkup(galleryItems);

galleryListRef.innerHTML = imagesMarkup

function createImgMarkup(galleryItems) {    
    return galleryItems.map(el =>
      `<li class="gallery__item"><a class="gallery__link" href='${el.original}'><img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    /> </a></li>`
    ).join('');
}


const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt",captionDelay:250})