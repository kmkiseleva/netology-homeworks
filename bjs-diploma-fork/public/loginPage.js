"use strict";

const userForm = new UserForm();

function callbackLogin(response) {
   if (response.success) {
      document.location.reload();
   } else {
      userForm.setLoginErrorMessage(response.error);
   }
   console.log(response);
}

function callbackRegister(response) {
   if (response.success) {
      document.location.reload();
   } else {
      userForm.setRegisterErrorMessage(response.error);
   }
   console.log(response);
}

userForm.loginFormCallback = data => ApiConnector.login(data, callbackLogin);
userForm.registerFormCallback = data => ApiConnector.register(data, callbackRegister);