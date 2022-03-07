const textarea = document.getElementById("editor");
const reset = document.getElementById("reset");

textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});
textarea.innerHTML = localStorage.getItem("text") || "";

reset.addEventListener("click", () => {
  localStorage.removeItem("text");
  textarea.innerHTML = "";
});
