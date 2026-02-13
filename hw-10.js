// const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
// const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

// // Функція countItems тут
// const countItems = (array, condition) => {
//   let count = 0;
//   for (const item of array) {
//     if (condition(item)) {
//       count += 1;
//     }
//   }
//   return count;
// };

// // Умови для перевірки:
// const isEven = (num) => num % 2 === 0;
// const isLarge = (num) => num > 10;
// const isShort = (word) => word.length <= 3;

// // Тестування
// console.log("Парних чисел:", countItems(numbers, isEven));
// console.log("Чисел більше 10:", countItems(numbers, isLarge));
// console.log("Коротких слів:", countItems(words, isShort));

// //2
// // Функція calculate тут
// const calculate = (a, b, operation) => {
//   return operation(a, b);
// };

// // Стрілкові функції для операцій тут
// const add = (a, b) => a + b;

// const subtract = (a, b) => a - b;

// const multiply = (a, b) => a * b;

// const divide = (a, b) => {
//   if (b === 0) {
//     return "Помилка: ділити на нуль НЕ МОЖНА";
//   }
//   return a / b;
// };

// // Тестування
// console.log(calculate(10, 5, add)); // Повинно показати 15
// console.log(calculate(10, 5, subtract)); // Повинно показати 5
// console.log(calculate(10, 5, multiply)); // Повинно показати 50
// console.log(calculate(10, 5, divide)); // Повинно показати 2
// console.log(calculate(10, 0, divide)); // Повинно показати помилку

// 3
// const repeatMessage = (times, messageCreator) => {
//   const messages = [];
//   for (let i = 0; i < times; i++) {
//     messages.push(messageCreator(i));
//   }
//   return messages;
// };

// console.log(repeatMessage(3, (i) => "Hello world!" + i));

//4
// const processMovies = (movies,action) => {
//     const arr = ["Harry Potter", "Not my fault", "Classmates", "Moana", "Avatar"]
//     for(const item of arr){
//         if(action(movies(i)))
//     }
// }
//............... to be continued
