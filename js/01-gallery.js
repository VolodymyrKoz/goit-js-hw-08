import SimpleLightbox from "simplelightbox";
import "node_modules/simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

// Create and render gallery items
const createGalleryItem = ({ preview, original, description }) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}" data-caption="${description}" data-src="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>
`;
galleryList.innerHTML = galleryItems.map(createGalleryItem).join("");

const instances = [];

// Show corresponding instance when image is clicked
galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const original = event.target
    .closest(".gallery__link")
    .getAttribute("data-src");
  const instance = new SimpleLightbox(`
    <img src="${original}" width="800" height="600">
  `);
  instances.push(instance); // Add instance to array
  instance.show();
  document.addEventListener("keydown", (event) => onEscPress(event, instance));
});

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "caption",
  captionDelay: 250,
});
