'use strict';
// скрипт 1
//const name = "Генератор защитного поля";
//let price = 1000;
//console.log('Выбран '+name+', цена за штуку '+price+' кредитов');
//price = 2000;
//console.log('Выбран '+name+', цена за штуку '+price+' кредитов');

// скрипт 2
//const total = 100;
//const ordered = 50;
//let res;
//if (ordered > total) {
//    res = "На складе недостаточно твоаров!";
//} else {
//    res = "Заказ оформлен, с вами свяжется менеджер";
//}
//console.log(res);

// скрипт 3
//const ADMIN_PASSWORD = 'jqueryismyjam';
//let message;
//const enter = prompt('Your password');
//if (enter === null) {
//    message = 'Отменено пользователем!';
//} else if (enter === ADMIN_PASSWORD) {
//    message = "Добро пожаловать";
//} else  {//(enter !== ADMIN_PASSWORD); {
//    message = "Доступ запрещен, неверный пароль!";
//}
//alert(message);

// скрипт 4
const pricePerDroid = 3000;
const credits = 23500;
let enter = prompt("Cколько дронов купить?");
let message;
let totalprice;
if (enter === null) {
    message = 'Отменено пользователем!';
    console.log('Отменено пользователем!');
} else {
    enter = Number(enter);
    totalprice = (enter * pricePerDroid);
    console.log("Цена заказа " + totalprice);
    if (enter * pricePerDroid > credits) {
        message = 'Недостаточно средств на счету!'; 
        console.log("Недостаточно средств на счету!");  
    } else {
      const balance = credits - enter * pricePerDroid;
      message = "Вы купили " + enter + " дронов, на счету осталось " + balance + " кредитов!";
      console.log("Вы купили " + enter + " дронов, на счету осталось " + balance + " кредитов!");
    } 
}  
alert(message);

