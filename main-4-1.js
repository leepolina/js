// РОЗГАЛУЖЕННЯ

// const age = 10

// const age = 18
// if(age >= 18){
//     console.log('ти можеш керувати авто')
// }else{
//     console.log('ти можеш НЕ керувати авто')
// }

// if(умова){
//     блок з програмкою, якщо true
// }else{
//     блок з програмкою, якщо false
// }

//розгалуження з багатьма умовами else..if

// const status = "premium"

// if(status === "base"){
//     console.log('Якість контенту 480')
// } else if(status === "plus"){
//     console.log('якість контенту 720')
// }else if(status === "premium"){
//     console.log('якість контенту 1020')
// } else{
//     console.log('так ти ж і не купив підписку')
// }

// const grade = -120;
// if (grade >= 90 && grade < 100) {
//   console.log("ти отримав А");
// } else if (grade >= 80 && grade < 90) {
//   console.log("ти отримав В");
// } else if (grade >= 70 && grade < 80) {
//   console.log("Ти отримав С");
// } else if (grade >= 60 && grade < 70) {
//   console.log("Ти отримав D");
// } else if (grade <= 60 && grade > 0) {
//   console.log("Ти отримав перездачу");
// } else {
//   console.log("помилка оцінювання");
// }

// const balance = 1000000000;
// if (balance > 0) {
//   console.log(" 돈이 있어");
// } else {
//   console.log(" 돈이 없어");
// }

// const money = balance > 0 ? " 돈이 있어" : " 돈이 없어";
// console.log(money);

//ТЕРНАРНИЙ ОПЕРАТОР

//const variable = умова? відповідь"true" : відповідь"false"

// const num = 15

// // const result = num > 10 && num < 20 && num === 15 //перевірить кожну з умов
// const result = num > 10 || num < 20 || num === 15; //перевірить лише одну, знайшовши лише одну правильну, інші перевіряти не буде. якщо жоден із варіантів не працює
// console.log(result)

// console.log(true);
// console.log(!true);

// console.log(1 && 4 && 7 && "mango"); // видасть останній варіант

// console.log("name" || "" || null || 0 || undefined); // видасть або тру перший або останній варіант

// console.log(!" "); // фолс

// const salary = 500;
// if (salary >= 1000 && salary < 2000) {
//   console.log("poor");
// } else if (salary > 2000 && salary < 3000) {
//   console.log("average");
// } else if (salary >= 3000) {
//   console.log("rich");
// } else {
//   console.log("недостатньо");
// }

const balance = 1000;
// let message;

if (balance > 1) {
  let message = "Ваш баланс позитивний!";
  console.log(message);
  const a = 5;
} else {
  let message = "Ваш баланс негативний!";
  console.log(message);
  const a = 10;
}

let message = balance > 1 ? "Ваш баланс позитивний!" : "Ваш баланс негативний!";
console.log(message);
