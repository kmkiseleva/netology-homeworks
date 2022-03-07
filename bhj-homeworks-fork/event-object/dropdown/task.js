const dropdown = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
let dropdownItems = document.querySelectorAll(".dropdown__item");
const arr = [...dropdownItems];
console.log(arr);

dropdown.addEventListener("click", (e) => {
  e.preventDefault();
  dropdownList.classList.toggle("dropdown__list_active");
});

for (let item of arr) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.textContent = item.textContent;
    dropdownList.classList.remove("dropdown__list_active");
  });
}
