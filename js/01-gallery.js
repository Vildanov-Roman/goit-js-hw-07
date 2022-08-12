import { galleryItems } from './gallery-items.js';
// // Change code below this line

const gallery = document.querySelector(".gallery");
const imagesMarkup = createItems(galleryItems);
gallery.insertAdjacentHTML("beforeend", imagesMarkup);

function createItems(item) {
	return galleryItems
    .map(({ preview, original, description }) => {
    	return `<div class="gallery__item">
    	<a class="gallery__link" href="${original.value}">
        <img
        	class="gallery__image"
        	src="${preview}"
        	data-source="${original}"
        	alt="${description}"
        />
    	</a>
    </div>`;
    })
    .join("");
}


gallery.addEventListener('click', evt => {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
		return
	}
    const selectedImage = evt.target.getAttribute('data-source')
    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)
    instance.show()
    
    gallery.addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			instance.close()
		}
	})
})
