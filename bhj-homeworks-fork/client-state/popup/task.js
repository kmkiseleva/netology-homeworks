const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close");

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (const cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(value);
    }
  }

  return null;
}

if (getCookie("status") !== "Modal Was Closed") {
  modal.classList.add("modal_active");
} else {
  modal.classList.remove("modal_active");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  let name = "status";
  let value = "Modal Was Closed";
  document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
});
