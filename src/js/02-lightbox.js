import { galleryItems } from './gallery-items.js';
// Change code below this line


/*Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. Використовуй готовий код з першого завдання.
Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на два файли: simple-lightbox.min.js і simple-lightbox.min.css.
Ініціалізація бібліотеки після створення і додання елементів галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.
*/

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItems
                        .map((item) => 
                            `<li class="gallery__item">
                                <a class="gallery__link" href="${item.original}">
                                    <img class="gallery__image" 
                                    src="${item.preview}"
                                    alt="${item.description}" />
                                </a>
                         </li>`)
                        .join('');

galleryContainer.innerHTML = galleryMarkup;


    const lightboxGallery = new SimpleLightbox('.gallery a', {
        captions: true, // додати підписи до зображень
        captionsData: 'alt', // брати текст підписів з атрибуту alt
        captionDelay: 250, // затримка перед появою підписів
        animationSpeed: 250,
    });
