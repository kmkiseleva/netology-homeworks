let currentData = new Date().toString().substring(16, 21);
const chatWidget = document.querySelector(".chat-widget");
const messages = document.getElementById("chat-widget__messages");
const chatInput = document.getElementById("chat-widget__input");

const robotMsgs = [
  "На самом деле мы не онлайн, а этот чат - пустышка",
  "Уехали в отпуск, вернемся не скоро",
  "Молчание - золото",
  "Чаты - для слабаков, настоящие ребята звонят по телефону!",
  "И вам здрасьте",
  "Я занят, тч давай до свидания",
  "Развелось тут спамеров...",
  "Мне не интересно с вами разговаривать",
  "Бла-бла-бла",
  "Оторвись от компа, камон!",
  "Всё уже продано без вас, ха-ха",
  "Идите, куда хотите",
  "Совести нет, всё продали",
  "Я тоже много чего хочу, да молчу!",
  "Ну и что ещё вы мне скажете?",
  "Сколько можно думать?",
  "Loading...",
  "Хорошо там, где Вас нет, да-да, именно Вас",
];

chatWidget.addEventListener("click", () => {
  chatWidget.classList.add("chat-widget_active");
});

chatInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && chatInput.value !== "") {
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${currentData}</div>
      <div class="message__text">${chatInput.value}</div>
    </div>`;
    chatInput.value = "";

    let randomMsg = Math.floor(Math.random() * robotMsgs.length);
    function robotMsg() {
      messages.innerHTML += `
      <div class="message">
        <div class="message__time">${currentData}</div>
        <div class="message__text">${robotMsgs[randomMsg]}</div>
      </div>`;
    }
    setTimeout(robotMsg, 500);
  }
});
