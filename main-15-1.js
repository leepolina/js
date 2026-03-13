//Метод reduce()використовується для того, щоб претворити масив на одне значення

// let arr = [1,2,3,4,5]

//let summ = arr.reduce((проміжнийРезультат, поточнийЕлементМасиву, індекс, самМасив) => {}, 0)

// let total = 0
// for(let item of arr){
//     total+=item
// }

// console.log(total)

// let total = arr.reduce((total, item)=> total+item, 0)
// console.log(total)

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// console.log(totalSalary);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const totalLikes = tweets.reduce((like, item) => like + item.likes, 0);
//  return numbers.legth; console.log(totalLikes);

//sort() - сортування масиву

// let arr = [1, 20, 15, 300, 7, 9];

// const newArr = arr.sort((curEl, nextEl) => curEl - nextEl);
// console.log(newArr);
// console.log(arr.sort())

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers
//   .filter((item) => item % 2 === 0)
//   .map((item) => item * item)
//   .reverse();

// console.log(result);

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 120, quantity: 3 },
//   { label: "Lemons", price: 70, quantity: 4 },
// ];

// const getQuantity = cart.reduce(
//   (quantity, item) => quantity + item.quantity,
//   0,
// );
// console.log(getQuantity);

const numbers = [1, 2, 3, 4, 5];

const getAverage = numbers.reduce((average, number, index, numbers) => {
  average += number;
  return average;
}, 0);

console.log(getAverage / numbers.length);
