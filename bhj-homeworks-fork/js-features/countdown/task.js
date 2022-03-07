let timerData = document.getElementById("timer");

const timer = function () {
  if (timerData.textContent > 0) {
    timerData.textContent--;
  } else if (timerData.textContent === "0") {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalID);
  }
};

let intervalID = window.setInterval(timer, 1000);
