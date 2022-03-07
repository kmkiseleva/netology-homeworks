let tabs = document.querySelectorAll(".tab");
const tabsArr = [...tabs];
let content = document.querySelectorAll(".tab__content");
const contentArr = [...content];

let activeTab;
for (let tab of tabsArr) {
  if (tab.classList.contains("tab_active")) {
    activeTab = tabsArr.indexOf(tab);
  }

  tab.addEventListener("click", () => {
    tabsArr[activeTab].classList.remove("tab_active");
    contentArr[activeTab].classList.remove("tab__content_active");

    let index = tabsArr.indexOf(tab);
    tab.classList.add("tab_active");
    contentArr[index].classList.add("tab__content_active");

    activeTab = tabsArr.indexOf(tab);
  });
}
