// "use strict";
// const users = ["Polina", "Minjae", "Yunsul"];

// for(let i = 0; i<users.length; i++){
//     const element = users[i];
//     console.log(element)
// }

// for (const user of users) {
//   console.log(user);
// }

// for (const user of users) {
//   //   console.log(user);
//   if (user === "Minjae") {
//     console.log("This person is our user");
//   }
// }
// console.log("This person is not our user");

// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(array[2]);
// console.log(array[2][2]);

// for (let i = 0; i < array.length; i += 1) {
//   // console.log(array[i])
//   for (let j = 0; j < array[i].length; j += 1) {
//     console.log(array[i][j]);
//   }
// }

// let summ = 0;
// for (const arr of array) {
//   // console.log(arr)
//   for (const a of arr) {
//     // console.log(a)
//     summ += a;
//   }
// }

// console.log(summ);

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// for (const items of cart) {
//   total += items;
// }
// console.log(total);

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// // console.log(cart[1]);

// for (const element of cart) {
//   if (element % 2 === 0) {
//     total += element;
//   }
// }
// console.log(total);

// const logins = ["sohyunlee", "koala_sohyunnaa", "koalalee", "Polinaaa314"];
// let userLogin = prompt("Enter your login...");
// let message;
// for (const login of logins) {
//   if (login === userLogin) {
//     console.log("welcome");
//     break;
//   }
//   message=("Sorry, couldn't fins user");
// }
// console.log(message)

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];
for (const number of numbers) {
  if (smallestNumber < number) {
    smallestNumber = number;
  }
}
console.log(numbers)
