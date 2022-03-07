const clicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
cookie.onclick = function () {
  clicker.textContent++;
  if (clicker.textContent % 2) {
    cookie.width = 180;
  } else {
    cookie.width = 200;
  }
};
