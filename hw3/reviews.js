const productreviewEl = document.querySelector(".product_review");
const products = JSON.parse(localStorage.getItem("data"));

products.forEach((e, index) => {
  productreviewEl.insertAdjacentHTML(
    "beforeend",
    `<div class = "product_card"><h1>${e.product}</h1>
          <p>${e.reviews}</p>
          <button class="delete">Удалить отзыв</button></div>`
  );
});
productreviewEl.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const index = e.target.getAttribute("data-index");

    products.splice(index, 1);

    localStorage.setItem("data", JSON.stringify(products));
    productreviewEl.innerHTML = "";
    products.forEach((e, index) => {
      productreviewEl.insertAdjacentHTML(
        "beforeend",
        `<div class="product_card">
           <h1>${e.product}</h1>
           <p>${e.reviews}</p>
           <button class="delete" data-index="${index}">Удалить отзыв</button>
         </div>`
      );
    });
  }
});
