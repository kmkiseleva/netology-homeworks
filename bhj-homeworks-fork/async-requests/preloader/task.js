"use strict";

const animation = document.getElementById("loader");
const item = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    animation.classList.remove("loader_active");
    const result = JSON.parse(xhr.responseText);
    const valutes = Object.values(result.response.Valute);

    valutes.forEach((element) => {
      item.insertAdjacentHTML(
        "beforeEnd",
        `<div class="item"><div class="item__code">${element.CharCode}</div><div class="item__value">${element.Value}</div><div class="item__currency">руб.</div></div>`
      );
    });
  }
});
