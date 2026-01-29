//1
// let num = 0;
// const logItems = function (array) {
//   for (item of array) {
//     num += 1;
//     console.log(`${num} - ${item}`);
//   }
// };

// logItems(["Mango", "Poly", "Ajax"]);

//2
// let pricePerWord = 120;
// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(" ");
//   return words.length * pricePerWord;
// };
// console.log((calculateEngravingPrice("Love forever", 120)));

//3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// const findLongestWord = function (string) {
//   let longest = "";
//   for (const word of string) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }
//   return longest;
// };

// console.log(findLongestWord(["Hello", "Dinosaurs", "teamlead", "id", "egg"]));

//4
// let string =
//   "Hello! You have a new home assignment in your profile. Check it out!";
// const formatString = function (string) {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     return string.slice(0, 40) + "...";
//   }
// };
// console.log(
//   formatString(
//     "Hello! You have a new home assignment in your profile. Check it out!",
//   ),
// );
// console.log(formatString("hi"));

//5
// const checkForSpam = function (message) {
//   let string = message.toLowerCase();

//   if (string.includes("spam") || string.includes("sale")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(checkForSpam("У нас сьогодні SALE"));
// console.log(checkForSpam("Hello! "));

//6

let input;
const numbers = [];
let total = 0;

const addNewNumber = function (numbers) {
  while ((input = prompt("Введи число"))) {
    numbers.push(Number(input));
    console.log(numbers);
  }

  if (numbers.length > 0) {
    for (const num of numbers) {
      total += num;
    }
    console.log(`Загальна сума чисел дорівнює ${total}`);
  }
};

console.log(addNewNumber(numbers));
