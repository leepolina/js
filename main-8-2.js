// const num = [2, 5, 6, 7, 9];
// num.push(20);
// console.log(num);

// const str = ["Kateryna", "Sviat", "Illia", "Polina"];
// str.splice(3, 1);
// console.log(str);

// const number = [1, 4, 3, 7, 8, 9, 23, 10, 26, 24];
// const newNumber = number.slice(0, 5);
// console.log(newNumber)
// number.includes(89)
// console.log(number.includes(89));

// console.log(num.join(" "));

// const title = "Top 10 benefits of React framework";
// console.log(title.split(" "));
// console.log(title.split(""));

// const newArray = num.concat(number);
// console.log(newArray.indexOf(26));

// const numberIsExist = newArray.includes(100) ? "Є в масиві" : "Немає в масиві";
// console.log(numberIsExist);

// const numb = 4;
// if (newArray.indexOf(numb) === -1) {
//   console.log("У нашому масиві такого немає");
// } else {
//   console.log("У нашому масиві таке є");
//   console.log(newArray.indexOf(numb));
// }

// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// console.log(sum);

// for (const numbers of num) {
//   sum += numbers;
// }
// console.log(sum);

// const message = "Welcome to Ukraine!";
// const symbol = "I";

// const newMessage = message.toUpperCase().split("").includes(symbol);
// console.log(newMessage);

// const books = [
//   "Dopamine Nation",
//   "In thousand different ways",
//   "The summer i was pretty",
// ];
// const numberedBooks = [];
// for (let i = 0; i < books.length; i++) {
//   numberedBooks.push(`${books[1]} - ${i + 1}`);
// }
// console.log(numberedBooks);

let name = "JavaScript";
let result = "";

// for (let i = 0; i < name.length; i++) {
//   if (name[i] === name[i].toUpperCase()) {
//     result += name[i].toLowerCase();
//   } else {
//     result += name[i].toUpperCase();
//   }
// }

// console.log(result);

for (const item of name) {
  //   console.log(item);
  if (item === item.toUpperCase()) {
    result += item.toLowerCase();
  } else {
    result += item.toUpperCase();
  }
}

console.log(result);
