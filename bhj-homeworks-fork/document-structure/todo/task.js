"use strict";
const input = document.getElementById("task__input");
const add = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function addTask() {
  if (input.value !== "") {
    tasksList.insertAdjacentHTML(
      "afterBegin",
      `<div class="task"><div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a></div>`
    );
    const newTask = document.querySelector(".task");
    const remove = newTask.querySelector(".task__remove");
    remove.addEventListener("click", () => {
      newTask.remove();
    });
    input.value = "";
  }
}

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
    addTask();
  }
});

add.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});
