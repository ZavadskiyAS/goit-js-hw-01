'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const enter = prompt('Your password');
if (enter === null) {
   message = 'Отменено пользователем!';
} else if (enter === ADMIN_PASSWORD) {
   message = "Добро пожаловать";
} else  {//(enter !== ADMIN_PASSWORD); {
   message = "Доступ запрещен, неверный пароль!";
}
alert(message);