"use strict";

const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const result = JSON.parse(xhr.responseText);
    const data = Object.values(result.data);
    const title = data[0];
    const answers = data[1];
    pollTitle.insertAdjacentHTML("afterbegin", title);
    answers.forEach((element) => {
      pollAnswers.insertAdjacentHTML(
        "afterbegin",
        `<button class="poll__answer">${element}</button>`
      );
    });
    const buttons = [...document.querySelectorAll("button")];
    buttons.forEach((element) => {
      element.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    });
  }
});
