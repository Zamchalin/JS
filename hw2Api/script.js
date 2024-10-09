const images = [
  "img/image1.jpg",
  "img/image2.jpg",
  "img/image3.jpg",
  "img/image4.jpg",
];

const imageEl = document.querySelector(".current-image");
const beforeButtonEl = document.querySelector(".before-button");
const nextButtonEl = document.querySelector(".next-button");
const indicatorEls = document.querySelectorAll(".indicator");
let current = 0;

function updateSlider() {
  imageEl.src = images[current];
  indicatorEls.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === current);
  });
}

beforeButtonEl.addEventListener("click", () => {
  current = current === 0 ? images.length - 1 : current - 1;
  updateSlider();
});

nextButtonEl.addEventListener("click", () => {
  current = current === images.length - 1 ? (current = 0) : current + 1;
  updateSlider();
});
indicatorEls.forEach((indicator) => {
  indicator.addEventListener("click", (event) => {
    current = parseInt(event.target.dataset.index);
    updateSlider();
  });
});
updateSlider();
