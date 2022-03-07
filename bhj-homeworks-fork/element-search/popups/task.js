const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
let showSuccess = document.querySelector(".show-success");
let done = document.querySelector(".btn_success");
let popupClose = document.getElementsByClassName("modal__close");
let arrPopup = Array.from(popupClose);

function removePopup() {
  modalMain.classList.remove("modal_active"),
    modalSuccess.classList.remove("modal_active");
}

for (let item of arrPopup) {
  item.addEventListener("click", removePopup);
}

done.addEventListener("click", removePopup);
showSuccess.addEventListener("click", function () {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
});
