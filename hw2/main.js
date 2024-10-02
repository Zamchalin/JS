// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
  #books = [];
  constructor(initialBooks = []) {
    const uniqueBooks = [...new Set(initialBooks)];
    if (uniqueBooks.length !== initialBooks.length) {
      throw new Error("В начальном списке книг не должно быть дубликатов.");
    }

    this.#books = uniqueBooks;
  }

  get allBooks() {
    return this.#books.slice();
  }
  addBook(title) {
    if (this.#books.includes(title)) {
      throw new Error(`Книга "${title}" уже есть в библиотеке.`);
    }
    this.#books.push(title);
  }
  removeBook(title) {
    const index = this.#books.indexOf(title);
    if (index === -1) {
      throw new Error(`Книга "${title}" не найдена в библиотеке.`);
    }
    this.#books.splice(index, 1);
  }
  hasBook(title) {
    return this.#books.includes(title);
  }
}

let books = new Library(["Му-му", "1984", "Ведьмак"]);
console.log(books);
books.addBook("Евгений Онегин");
console.log(books);
books.removeBook("Евгений Онегин");
console.log(books);
console.log(books.hasBook("Евгений Онегин"));

// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
// const button__review = document.getElementById("button__review");
let counter = 0;
document.getElementById("submitReview").addEventListener("click", function () {
  counter++;
  addReview();
});

function addReview() {
  const reviewInput = document.getElementById("reviewInput");
  const reviewText = reviewInput.value;
  const reviewContainer = document.getElementById("reviewContainer");

  if (reviewText.length < 50 || reviewText.length > 500) {
    throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
  }

  const reviewElement = document.createElement("p");
  reviewElement.textContent = `id:${counter}
  Отзыв:${reviewText}`;

  reviewContainer.appendChild(reviewElement);

  reviewInput.value = "";
}
