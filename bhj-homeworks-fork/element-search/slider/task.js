const prev = document.querySelector("div.slider__arrow_prev");
const next = document.querySelector("div.slider__arrow_next");

let sliderItems = document.getElementsByClassName("slider__item");
const sliders = Array.from(sliderItems);
let sliderNum = 0;

for (let slider of sliders) {
  if (slider.classList.contains("slider__item_active")) {
    sliderNum = sliders.indexOf(slider);
    console.log(sliderNum);
  }
}

function changeSlide() {
  sliders[sliderNum].classList.remove("slider__item_active");
  if (sliderNum < sliders.length - 1) {
    sliderNum++;
  } else {
    sliderNum = 0;
  }
  sliders[sliderNum].classList.add("slider__item_active");
}

prev.addEventListener("click", changeSlide);
next.addEventListener("click", changeSlide);
