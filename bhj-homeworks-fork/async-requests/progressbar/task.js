"use strict";
const form = document.getElementById("form");
const progress = document.getElementById("progress");
progress.value = 0.0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://netology-slow-rest.herokuapp.com/upload.php");
  xhr.send(formData);
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState !== xhr.DONE) {
      progress.value += 0.1;
    }
  });
});
