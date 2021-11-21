import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const gallery = document.querySelector('.gallery');

let array = [];
galleryItems.forEach(element => {
  //tworzenie kontenera na poszczególne elementy
  const item = document.createElement('div');
  item.classList.add('gallery__item');
  //tworzenie linku i łączenie z kontenerem
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = element.original;
  item.append(link);
  //tworzenie obrazka i łączenie z linkiem
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.src = element.preview;
  img.dataset.source = element.original;
  img.alt = element.description;
  link.append(img);
  //wrzucenie całości do tablicy
  array.push(item);
});

gallery.append(...array);

const imgPicker = event => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
  const instance = basicLightbox.create(
    `<div class="modal">
        <img src=${event.target.src} >;
    </div>`,
    {
      onShow: instance => {
        instance.element().querySelector('img').src = event.target.dataset.source;
      },
    },
  );
  instance.show();
  if (instance.show()) {
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') instance.close();
    });
  }
};

gallery.addEventListener('click', imgPicker);
//console.log(galleryItems);
