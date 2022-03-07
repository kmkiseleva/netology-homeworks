"use strict";
let rotatorCase = document.querySelectorAll(".rotator__case");
const rotatorsArr = [...rotatorCase];

function changeRotator() {
  let index;
  for (let rotator of rotatorsArr) {
    if (rotator.classList.contains("rotator__case_active")) {
      index = rotatorsArr.indexOf(rotator);
      rotatorsArr[index].classList.remove("rotator__case_active");
      if (index < rotatorsArr.length - 1) {
        index++;
      } else {
        index = 0;
      }
    }
  }
  rotatorsArr[index].classList.add("rotator__case_active");
  let color = rotatorsArr[index].dataset.color;
  rotatorsArr[index].style.color = color;
}

setInterval(changeRotator, 1000);
