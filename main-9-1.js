// //function declaration оголошення функції
// //function назваФункції(аргументи){
// // блок дії}

// function calculate(a, b) {
//   return a + b; // що буде повертати результат
// }
// console.log(calculate(10, 8));

// console.log(calculate(44, 5));

//function expression функціональний вираз

// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(10, 5));
// const blalala = add(5,5)
// console.log(blalala)

const changeCase = function (string = "ggggTTTT") {
  let newString = "";
  for (let symbol of string) {
    if (symbol === symbol.toUpperCase()) {
      newString += symbol.toLowerCase();
    } else {
      newString += symbol.toUpperCase();
    }
  }
  return newString;
};
console.log(changeCase());
console.log(changeCase(QWErty));
// console.log(changeCase("qweRTY")); // QWErty
// console.log(changeCase("mAnGo")); // MaNgO
// console.log(changeCase("AjAx")); // aJaX

// const isEven = function (number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isEven(4)); // true
// console.log(isEven(3)); // false

// const sumArray = function (array) {
//   let sum = 0;
//   for (const num of array) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(sumArray([1, 2, 3, 4]));
