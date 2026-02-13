// function summ(a, sqrB) {
//   return a + sqrB;
// }

// //callback функція яка є аргументом
// function sqrB(b) {
//   return b * b;
// }

// console.log(summ(5, sqrB(2)));

// function fn() {}

// const fn1 = function () {};

// const fn2 = () => {};

// const summ = (a, b) => a + b;
// console.log(summ(10, 5));

// const summ = (a, sqrB){
//     return a + sqrB
// }
// const sqrB = (b) =>b*b

// console.log(summ(5, sqrB(2))

// )

// const arrSqr = (arr) => {
//   let newArr = [];
//   for (let item of arr) {
//     newArr.push(item * item);
//   }
//   return newArr;
// };

// console.log(arrSqr([1, 2, 3, 4, 5, 6]));

// const arr = [1, 2, 3, 4, 5];

// function cb(summ, num) {
//   return summ + num;
// }
// function sumArray(arr, callback) {
//   let total = 0;
//   for (let item of arr) {
//     total = callback(total, item);
//   }
//   return total;
// }

// console.log(sumArray(arr, cb));

// const arr = [1, 2, 3, 4, 5];

// const cb = (number, mlt) => number * mlt;

// function multiplyArray(arr, num, callback) {
//   const res = [];
//   for (let item of arr) {
//     res.push(callback(item, num));
//   }
//   return res;
// }

// console.log(multiplyArray(arr, 3, cb));

// const myAverageScore = (scores, callback) => {
//   let summ = 0;
//   for (let i = 0; i < scores.length; i++) {
//     summ += scores[i];
//   }
//   const avarage = summ / scores.length;
//   //return avarage
//   return callback(avarage);
// };
// //fn()
// const callback = (avarage) => {
//   if (avarage >= 91 && avarage <= 100) {
//     return "my avarage score A";
//   } else if (avarage >= 81 && avarage <= 90) {
//     return "my avarage score B";
//   } else if (avarage >= 71 && avarage <= 80) {
//     return "my avarage score C";
//   } else if (avarage >= 61 && avarage <= 70) {
//     return "my avarage score D";
//   } else {
//     return "my avarage score F";
//   }
// };

// console.log(myAverageScore([100, 75, 81, 96], callback));
// console.log(myAverageScore([45, 63, 85, 70], callback));
// console.log(myAverageScore([77, 82, 60, 58], callback));
// console.log(myAverageScore([93, 99, 93, 96], callback));

// const processNumbers = function (arr, callback) {
//   return callback(arr);
// };
// const countEven = (arr) => {
//   let count = 0;
//   for (const item of arr) {
//     if (item % 2 === 0) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const getAverage = (arr) => {
//   let summ = 0;
//   for (let i = 0; i < arr.length; i++) {
//     summ += arr[i];
//   }
//   const avarage = summ / arr.length;
//   return avarage;
// };
// const countGreaterThan50 = (arr) => {
//   let num = 0;
//   for (const number of arr) {
//     if (number >= 50) {
//       num += 1;
//     }
//   }
//   return num;
// };

// console.log(processNumbers([10, 25, 60, 80, 33], countEven));
// // 3

// console.log(processNumbers([10, 25, 60, 80, 33], getAverage));
// // 41.6

// console.log(processNumbers([10, 25, 60, 80, 33], countGreaterThan50));
// // 2

// const repeatedAction = (count, callback) => {
//   const arr = [];
//   for (let i = 0; i < count; i++) {
//     arr.push(callback(i));
//   }
//   return arr;
// };
// console.log(repeatedAction(5, (i) => i * 2));
// console.log(repeatedAction(8, (i) => `item ${i}`));
// console.log(repeatedAction(10, (i) => `${i}*2 = ${i * 2}`));

