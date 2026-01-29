// const summ = function (...args) {
//   const arr = Array.from(arguments);
//   console.log(arr);
//   let total = 0;
//   for (const ar of arguments) {
//     total += ar;
//   }
//   //   return total;
// };
// summ(11, 2, 3);
// console.log(summ(11, 2, 3, 5, 7));
// console.log(summ(11, 2, 3, 5, 7, 6, 8, 3, 5));

// const globalVar = "мене видно з будь якого місця коду"
// if(true){
//     const a = 1
//     console.log(a+globalVar)
//     if(true){
//         const b = 2
//         console.log(b+a+globalVar)
//         if(true){
//             const c = 3
//             console.log(c+b+a+globalVar)
//         }
//     }
// }

// console.log(globalVar)

// const maxNum = function (array) {
//   let max = array[0];
//   for (const num of array) {
//     if (max <= num) {
//       max = num;
//     }
//   }
//   return max;
// };

// console.log(maxNum([1, 20, 3, 4, 5, 6, 7]));

const hello = function (name) {
  return `Привіт ${name}`;
};


const username = prompt("Введи своє ім'я")
console.log(hello(username))