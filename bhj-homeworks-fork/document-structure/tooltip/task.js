"use strict";
const links = [...document.querySelectorAll("a")];

for (let link of links) {
  let index;
  link.addEventListener("click", (e) => {
    e.preventDefault();
    index = links.indexOf(link);
    const leftBound = link.getBoundingClientRect().left;
    const bottomBound = link.getBoundingClientRect().bottom;
    let text = link.getAttribute("title");
    let nextItem = link.nextElementSibling;

    if (nextItem === null || !nextItem.classList.contains("tooltip_active")) {
      links[index].insertAdjacentHTML(
        "afterEnd",
        `<div class="tooltip tooltip_active" style="left: ${leftBound}px; top: ${bottomBound}px">${text}</div>`
      );
    } else if (nextItem.classList.contains("tooltip")) {
      nextItem.classList.remove("tooltip_active");
    }
  });
}
