"use strict";
// корзина и товары
const cart = document.querySelector(".cart__products");
const products = [...document.querySelectorAll(".product")];
// управление количеством товара
const decs = [...document.querySelectorAll(".product__quantity-control_dec")];
const incs = [...document.querySelectorAll(".product__quantity-control_inc")];
const values = [...document.querySelectorAll(".product__quantity-value")];
const addButtons = [...document.querySelectorAll(".product__add")];

// уменьшить количество товара
for (let dec of decs) {
  dec.addEventListener("click", () => {
    let index = decs.indexOf(dec);
    if (values[index].textContent > 1) {
      values[index].textContent--;
    }
  });
}

// увеличить количество товара
for (let inc of incs) {
  inc.addEventListener("click", () => {
    let index = incs.indexOf(inc);
    values[index].textContent++;
  });
}

// добавить товар в корзину
for (let button of addButtons) {
  button.addEventListener("click", () => {
    let index = addButtons.indexOf(button);
    let value = values[index].textContent;
    const dataId = products[index].dataset.id;
    const imageSrc = products[index].children[1].getAttribute("src");
    const cartProducts = [...cart.children];

    if (!cartProducts.find((item) => item.dataset.id === dataId)) {
      cart.insertAdjacentHTML(
        "afterBegin",
        `<div class="cart__product" data-id=${dataId}><img class="cart__product-image" src=${imageSrc}><div class="cart__product-count">${value}</div></div>`
      );
    } else {
      const product = cartProducts.find((item) => item.dataset.id === dataId);
      let productCount = product.querySelector(".cart__product-count");
      let newCount = Number(productCount.textContent) + Number(value);
      productCount.innerText = newCount;
    }
  });
}
