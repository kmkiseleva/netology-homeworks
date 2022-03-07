const firstList = document.querySelector("ul li");
const firstListMainInput = firstList.querySelector("input");
const firstSubList = firstList.querySelector("ul");
const firstListSubInputs = [...firstSubList.querySelectorAll("input")];

const secondList = firstList.nextElementSibling;
const secondListMainInput = secondList.querySelector("input");
const secondSubList = secondList.querySelector("ul");
const secondListSubInputs = [...secondSubList.querySelectorAll("input")];

function check(element) {
  if (!element.checked) {
    element.checked = true;
  } else {
    element.checked = false;
  }
}

firstListMainInput.addEventListener("click", () => {
  firstListSubInputs.forEach((item) => check(item));
});

secondListMainInput.addEventListener("click", () => {
  secondListSubInputs.forEach((item) => check(item));
});
