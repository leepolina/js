// const answer = prompt("Яка “офіційна” назва JavaScript?");
// let message;
// // if (answer === "ECMAScript" || answer === "ecmaScript") {
// //   message=("Правильно!");
// // } else {
// //   message=("Ти не знаєш?ECMAScript!");
// // }

// message =
//   answer === "ECMAScript" || answer === "ecmaScript"
//     ? "Правильно!"
//     : "Ти не знаєш?ECMAScript!";
// console.log(message);

// //const variable = умова? відповідь"true" : відповідь"false"

// const a = 5;
// const b = 6;
// let result;
// result = a + b < 4 ? "Нижче" : "Вище";
// console.log(result);

// const x1 = 10;
// const x2 = 30;
// const number = 45;
// let message;
// if (number < x1) {
//   console.log("Число не входить у діапазон");
// } else if (number >= x1 && number <= x2) {
//   console.log("Число входить у діапазон ");
// } else if (number > x2) {
//   console.log("Число не входить у діапазон");
// }

// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// if (isOnline === true && isFriend === true && isDnd === false) {
//   console.log("You can chat with this person");
// } else {
//   console.log("You cannot chat with this person");
// }

// Напиши скрипт обробки покупки в магазині.
//   - Баланс користувача зберігається в змінній balance - отримати з інпуту
//   - Сумма покупки зберігається в змінній payment - отримати з інпуту
//   - Перед перевіркою вивести повідомлення на екран:
//   «Загальна вартість замовлення [число] кредитів. Перевіряємо кількість
//   доступних коштів на рахунку»
//  - Якщо сума покупки не перевищує баланс:
//      - Відняти з балансу суму покупки
//    - Вивести повідомлення «На рахунку залишилося [число] кредитів»
//  - Якщо сума покупки перевищує баланс:
//     - Вивести повідомлення «На рахунку недостатньо коштів для проведення операції!»
//  - В кінці вивести повідомлення «Операція завершена»

let balance = Number(prompt("Введи баланс"));
let payment = Number(prompt("Введи суму замовлення"));
alert(
  `Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість доступних коштів на рахунку`
);
if (payment < balance) {
  balance = balance - payment;
  console.log(`На рахунку залишилося ${balance} кредитів`);
} else {
  console.log(`На рахунку недостатньо коштів для проведення операції!`);
}
alert(`Операція завершена`);

