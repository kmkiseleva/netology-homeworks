"use strict";
// Выход из личного кабинета
const logoutBtn = new LogoutButton();
logoutBtn.action = () => ApiConnector.logout((response) => {
   if (response.success) {
      document.location.reload();
   }
});

// Получение информации о пользователе
function getCurrentUser() {
   ApiConnector.current((response) => {
      if (response.success) {
         ProfileWidget.showProfile(response.data);
      }    
   });
}
getCurrentUser();

// Получение текущих курсов валюты
const ratesBoard = new RatesBoard();
function callbackStocks(response) {
   if (response.success) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(response.data);
   }
}
function stocks() {
   ApiConnector.getStocks(callbackStocks);
}
stocks();
setInterval(stocks, 60000 );

// Операции с деньгами
const moneyMng = new MoneyManager();
// пополнение баланса
function callbackAddMoney(response) {
   if (response.success) {
      ProfileWidget.showProfile(response.data);
   }
   moneyMng.setMessage(response.success, response.success ? "Баланс успешно пополнен!" : response.error);
}
moneyMng.addMoneyCallback = (data) => {
   ApiConnector.addMoney(data, callbackAddMoney);
}

// конвертирование валюты
function callbackConvertMoney(response) {
   if (response.success) {
      ProfileWidget.showProfile(response.data);
   }
   moneyMng.setMessage(response.success, response.success ? "Валюта успешно конвертирована!" : response.error);
}
moneyMng.conversionMoneyCallback = (data) => {
   ApiConnector.convertMoney(data, callbackConvertMoney);
}

// перевод валюты
function callbackSendMoney(response) {
   if (response.success) {
      ProfileWidget.showProfile(response.data);
   }
   moneyMng.setMessage(response.success, response.success ? "Валюта успешно переведена!" : response.error);
}
moneyMng.sendMoneyCallback = (data) => {
   ApiConnector.transferMoney(data, callbackSendMoney);
}

// Работа с избранным
const favoritesWidget = new FavoritesWidget();
function callbackFavorites(response) {
   if(response.success) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyMng.updateUsersList(response.data);
   }   
}
function favorites() {
   ApiConnector.getFavorites(callbackFavorites);
}
favorites();

function callbackAddFavorites(response) {
   if(response.success) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyMng.updateUsersList(response.data);
   }
   moneyMng.setMessage(response.success, response.success ? "Пользователь успешно добавлен!" : response.error);
}
favoritesWidget.addUserCallback = (data) => {
   ApiConnector.addUserToFavorites(data, callbackAddFavorites);
}

function callbackRemove(response) {
   if(response.success) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyMng.updateUsersList(response.data);
   }
   moneyMng.setMessage(response.success, response.success ? "Пользователь успешно удален!" : response.error);
}
favoritesWidget.removeUserCallback = (data) => {
   ApiConnector.removeUserFromFavorites(data, callbackRemove);
}