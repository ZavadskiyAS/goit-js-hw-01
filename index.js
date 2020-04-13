'use strict';
// скрипт 1
const name = "Генератор защитного поля";
let price = 1000;
console.log('Выбран '+name+', цена за штуку '+price+' кредитов');
price = 2000;
console.log('Выбран '+name+', цена за штуку '+price+' кредитов');

// скрипт 2
const total = 100;
const ordered = 50;
let res;
if (ordered > total) {
    res = "На складе недостаточно твоаров!";
} else {
    res = "Заказ оформлен, с вами свяжется менеджер";
}
console.log(res);

// скрипт 3
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

// скрипт 4

