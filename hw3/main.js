// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const productEl = document.getElementById("product");
const reviewEl = document.getElementById("review");
const buttonEl = document.querySelector(".btn_review");
let data = JSON.parse(localStorage.getItem("data"));
if (data === null) {
  data = [];
} else {
  data = JSON.parse(localStorage.getItem("data"));
}

buttonEl.addEventListener("click", function () {
  data.push({
    product: `${productEl.value}`,
    reviews: `${reviewEl.value}`,
  });
  localStorage.setItem(`data`, JSON.stringify(data, null, 2));
  // body
});
