let score = document.getElementById("dead");
let lost = document.getElementById("lost");

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function restart() {
  lost.textContent = 0;
  score.textContent = 0;
}

for (let i = 1; i < 10; i++) {
  let hole = getHole(i);
  console.log(hole);
  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      score.textContent++;
      if (score.textContent === "10") {
        alert("You win!!!");
        restart();
      }
    } else {
      lost.textContent++;
      if (lost.textContent === "5") {
        alert("Game over!");
        restart();
      }
    }
  };
}
