'use strict';
const total = 100;
const ordered = 50;
let res;
if (ordered > total) {
   res = "На складе недостаточно твоаров!";
} else {
   res = "Заказ оформлен, с вами свяжется менеджер";
}
console.log(res);