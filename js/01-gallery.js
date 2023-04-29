import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

// Create and render gallery items
const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}" data-original-img=${original}>
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;

galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

// Create instances of SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
});

// Open the lightbox on image click
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  lightbox.open();
});
