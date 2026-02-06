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

const arr = [1, 2, 3, 4, 5];

const cb = (number, mlt) => number * mlt;

function multiplyArray(arr, num, callback) {
  const res = [];
  for (let item of arr) {
    res.push(callback(item, num));
  }
  return res;
}

console.log(multiplyArray(arr, 3, cb));
