const signIn = document.getElementById("signin");
const form = document.getElementById("signin__form");
const inputs = [...document.querySelectorAll("input")];
const welcome = document.getElementById("welcome");
const welcomeSpan = document.getElementById("user_id");
const exit = document.getElementById("exit__btn");

// показать форму
function showForm() {
  signIn.classList.add("signin_active");
}

// скрыть форму
function hideForm() {
  signIn.classList.remove("signin_active");
}

// очистить данные из полей формы
function clear() {
  form.reset();
}

// показать приветствие
function showWelcome() {
  welcome.classList.add("welcome_active");
}

// скрыть приветствие
function hideWelcome() {
  welcome.classList.remove("welcome_active");
}

// показать кнопку деавторизации
function showLogout() {
  exit.classList.add("exit_active");
}

// скрыть кнопку деавторизации
function hideLogout() {
  exit.classList.remove("exit_active");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
  xhr.send(formData);
  xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE) {
      const result = JSON.parse(xhr.responseText);
      if (result.success) {
        localStorage.setItem("userId", result.user_id);
        welcomeSpan.append(result.user_id);
        showWelcome();
        hideForm();
        showLogout();
        clear();
      } else if (!result.success) {
        clear();
        alert("Неверный логин/пароль");
      }
    }
  });
});

let userId = localStorage.getItem("userId");
if (userId) {
  hideForm();
  welcomeSpan.append(userId);
  showWelcome();
  showLogout();
} else if (!userId) {
  showForm();
}

exit.addEventListener("click", () => {
  localStorage.removeItem("userId");
  showForm();
  hideWelcome();
  hideLogout();
});
