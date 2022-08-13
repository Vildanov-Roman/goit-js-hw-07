import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");
const imagesMarkup = createItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function createItems(item) {
	return galleryItems
    .map(({ preview, original, description }) => {
    	return `<ul class="gallery">
    	<li>
			<a class="gallery__item" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"          
					alt="${description}"
				/>
			</a>
    	</li>    
    </ul>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
	captionsData: "alt",
	captionDelay: 250,
	animationSpeed: 250,
	fadeSpeed: 500,
	});