let links = document.querySelectorAll("a.menu__link");
const arrayOfLinks = Array.from(links);

for (let link of arrayOfLinks) {
  if (link.nextElementSibling) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      link.nextElementSibling.classList.toggle("menu_active");
    });
  }
}
