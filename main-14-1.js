// імперативний підхід - детальний опис програми(for або for of)

const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// декларативний підхід - не важливий процес, а ГОЛОВНЕ РЕЗУЛЬТАТ

//- масив.forEach((значення, індекс) => блок дії) //не можна перервати break //також є аналогом for
// numbers.forEach((number, index) =>
//   console.log(`індекс ${index} ---- ${number * 2}`),
// );
// console.log(numbers);

//- map(), ЗАЗВИЧАЙ ВИКОРИСТОВУЮЮТЬ ДЛЯ ТРАНСФОРМАЦІЇ
// numbers.map((number, index) => console.log(`index ${index} ---- ${number*2}`))
// console.log(numbers)

// const toys = ["м'ячик", "барбі", "машинка"];
//різниця між map i forEach

// toys.forEach((toy) => console.log(toy));
// const newToys = toys.forEach((toy) => {
//   return toy + "lalala";
// });
// console.log(newToys);

// const newToys = toys.map((toy) => {
//   return toy + "lalala";
// });
// console.log(newToys);

//- filter() //відфільтровує за параметром
// const filteredNumber = numbers.filter((number) => number > 3);
// console.log(filteredNumber);
const users = [
  { id: "000", name: "Mango", isActive: true, age: 19 },
  { id: "001", name: "Poly", isActive: false, age: 78 },
  { id: "002", name: "Ajax", isActive: true, age: 19 },
  { id: "003", name: "Chelsey", isActive: false, age: 18 },
];

// const isOnline = users.filter((user) => user.isActive );
// console.log(isOnline);
// let isOnline = [];
// for (let user of users) {
//   if (user.isActive) {
//     isOnline.push(user);
//   }
// }
// console.log(isOnline);

//- find() //знаходить певний елемент
const user = users.find((user) => user.id === "003");
console.log(user);

//- every()// кожен елемент масива має відповідати певному параметру повертає boolean
const isAdult = users.every((user) => user.age >= 18);
console.log(isAdult);

//- some()// хоча б один елемент масива відповідає певному параметру повертає boolean
const isAge = users.some((user) => user.age < 18);
console.log(isAge);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(const num of numbers){
//     console.log(num*2);
// }
