'use strict';
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