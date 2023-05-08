import { galleryItems } from './gallery-items.js';
// Change code below this line



/*Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
Реалізація делегування на ul.gallery і отримання url великого зображення.
Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox.
*/

/*Алгоритм
1. Отримати елемент gallery
2. Створити зміну де буде зберігатись розмітка зображень.
3. За допомогою innerHTML додати galleryMarkup до galleryContainer
4. Додаємо обробник подій при кліку на зображення, щоб відкривалась велика картинка.
5. Функція забороняє завантажння зображення (preventDefault). Застосовується бібліотека basicLightbox.
6. У функцію також додаємо обробник подій на вікно - закриття через Escape.
*/


const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = galleryItems
                        .map((item) => 
                            `<li class="gallery__item">
                                <a class="gallery__link" href="${item.original}">
                                    <img
                                        class="gallery__image"
                                        src="${item.preview}"
                                        data-source="${item.original}"
                                        alt="${item.description}"
                                    />
                                </a>
                            </li>`)
                        .join('');

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener("click", onClickGallery)

function onClickGallery(event) {
    event.preventDefault();
        if(event.target.nodeName !== "IMG"){
            return;
        }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">`, { onShow: () => { document.addEventListener("keydown", onCloseGallery); } });
    
    instance.show();

    const modalElement = document.querySelector(".modal");
    modalElement.addEventListener("click", () => {instance.close();});

    function onCloseGallery(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }
};


console.log(galleryItems);





