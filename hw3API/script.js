const ACCESS_KEY = "key"; // Замените на ваш API-ключ
const imageElement = document.getElementById("image");
const photographerElement = document.getElementById("photographer");
const likeButton = document.getElementById("likeButton");
const likeCountElement = document.getElementById("likeCount");

let likeCount = localStorage.getItem("likeCount")
  ? parseInt(localStorage.getItem("likeCount"))
  : 0;

likeCountElement.textContent = likeCount;

function displayImage() {
  fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      imageElement.src = data.urls.small;
      photographerElement.textContent = `Фотограф: ${data.user.name}`;
    })
    .catch((err) => console.error(err));
}

likeButton.addEventListener("click", () => {
  likeCount++;
  likeCountElement.textContent = likeCount;
  localStorage.setItem("likeCount", likeCount); // Сохраним количество лайков
});

// Вызов функции для отображения изображения при загрузке страницы
window.onload = displayImage;

let history = JSON.parse(localStorage.getItem("history")) || [];

function updateHistory(src, photographer) {
  history.push({ src, photographer });
  localStorage.setItem("history", JSON.stringify(history));
  renderHistory();
}

function renderHistory() {
  const historyElement = document.getElementById("history");
  historyElement.innerHTML = "";
  history.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.src;
    img.style.width = "100px"; // Ограничили размер для истории
    historyElement.appendChild(img);
    const p = document.createElement("p");
    p.textContent = `Фотограф: ${item.photographer}`;
    historyElement.appendChild(p);
  });
}

// Вызов функции для отображения изображения при загрузке страницы
window.onload = () => {
  displayImage();
  renderHistory();
  likeCountElement.textContent = likeCount;
};

// Изменяем displayImage для обновления истории
function displayImage() {
  fetch(`https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      imageElement.src = data.urls.small;
      photographerElement.textContent = `Фотограф: ${data.user.name}`;
      updateHistory(data.urls.regular, data.user.name); // Сохраняем в истории
    })
    .catch((err) => console.error(err));
}
