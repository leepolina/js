// const employee = {
//   name: "Oleh",
//   age: 55,
//   skills: ["js", "react", "node"],
//   isHuman: true,
//   wind: {
//     material: "hhhh",
//   },
//   getName: function () {
//     return this.name;
//   },
// };
// console.log(Object.entries(employee))//масив з масивами [ключ, значення]
// console.log(Object.values(employee));//масив зі значеннями об'єкту
// console.log(Object.keys(employee));//масив з ключами об'єкту
//for(const ключ in об'єкт) --- виводитиме ключі!

// for (const key in employee) {
//   console.log(key);

//   console.log(employee[key])
// }

// ... - spread розповсюдження,
// щоб розібрати масив,
// зробити копію масиву.

// const arr = [1, 2, 3];

// console.log(arr);
// console.log(...arr);

// console.log(Math.max(...arr))

// const student = ["Polina", "Sviat"];

// const newStudent = [...student, "Illia"];

// console.log(student);
// console.log(newStudent);

// const arr1 = [1, 2];
// const arr2 = [3, 4];

// const arrNew = [...arr1, ...arr2];

// const user = { ...employee };
// user.age = 25;
// console.log(user);

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const mergedObj = { ...obj1, ...obj2 };

// console.log(mergedObj);

// const a = 10;
// const b = a;
// console.log(a === b);

// const user = { name: "Masha", age: 16 };

// const newUser = user;

// newUser.age = 25;
// newUser.name = "Marie";

// console.log(user);

// let arr = [1, 2, 3];

// let newArr = [...arr];
// newArr.push(4);

// console.log(newArr);
// console.log(arr);

// let name = "Petro";

// const key = "age";
// const fn = function () {
//   return "weight";
// };

// const user = {
//   name,
//   [key]: "25",
//   [fn()]: 100,
// };

// console.log(user);

// const arr = [1, 2, 22];

// const newArr = [...arr];

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];
// const findFriendByName = function (arr, name) {
//   for (let friend of arr) {
//     if (friend.name === name) {
//       return "friend exists";
//     }
//   }
//   return "friend does not exist";
// };
// const getAllNames = function (arr, name) {
//   const names = [];
//   for (let friend of arr) {
//     names.push(friend.name);
//   }
//   return names;
// };

// const allFriendsOffline = function (arr, name, online) {
//   const offlineFriends = [];
//   for (let friend of arr) {
//     if (friend.online === false) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// console.log(getAllNames(friends));
// console.log(allFriendsOffline(friends));

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

// Напиши функцію getExpensiveProducts(arr, minPrice),
//  яка повертає масив назв товарів, ціна яких більша за minPrice.

// function getExpensiveProducts(arr, minPrice) {
//   let arrExpensiveProduct = [];
//   for (let product of arr) {
//     if (product.price > minPrice) {
//       arrExpensiveProduct.push(product.name);
//     }
//   }
//   return arrExpensiveProduct;
// }

// console.log(getExpensiveProducts(products, 1000));

const calculateFullWarehousePrice = function (arr) {
  let total = 0;
  for (let product of arr) {
    total += product.price * product.quantity;
  }
  return total;
};

console.log(calculateFullWarehousePrice(products));
