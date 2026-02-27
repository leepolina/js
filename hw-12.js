//1
// const user = {
//   name: "Polina",
//   age: 16,
//   hobby: "reading",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = "false";
// console.log(user);
// for (const key of Object.keys(user)) {
//   console.log(`${key}:${user[key]}`);
// }

//2
// const pet = {
//   name: "cat",
//   age: 2,
//   breed: "scottish fold",
//   color: "grey",
// };

// function countProps(obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// }

// console.log(countProps(pet));

//3
// const employees = {
//   Polina: 100,
//   Marie: 56,
//   Zhanek: 78,
//   Ainura: 67,
// };

// const findBestEmployee = function (object) {
//   let biggest = 0;
//   let name = "";
//   for (const key in object) {
//     if (object[key] > biggest) {
//       biggest = object[key];
//       name = key;
//     }
//   }
//   return name;
// };

// console.log(findBestEmployee(employees));

// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
//4

// const employees = {
//   John: 1800,
//   Marie: 900,
//   Bloom: 2800,
// };
// const countTotalSalary = function (employees) {
//   let total = 0;
//   for (let name in employees) {
//     total += employees[name];
//   }
//   return total;
// };
// console.log(countTotalSalary(employees))
// console.log(`${name}:${employees[]}`); // не працює

//5

// const objArr = [
//   { name: "kiwi", price: 50 },
//   { name: "strawberry", price: 150 },
//   { name: "candy", price: 95 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const results = [];

//   for (const obj of arr) {
//     if (prop in obj) {
//       results.push(obj[prop]);
//     }
//   }
//   return results;
// };

// console.log(getAllPropValues(objArr, "name"));
// console.log(getAllPropValues(objArr, "price"));



//6

// const arr = [
//   { productname: "chips", price: 110 , quantity:3 },
//   { name: "cake", price: 110 , quantity:10 },
//   { name: "cookie", price: 110 , quantity: 2},
//   { name: "blueberry box", price: 110 , quantity:1 },
// ];
// const calculateTotalPrice = function (allProducts, productName){
//     let total = 0 
//     for(let product of arr){
//         total += product.price * product.quantity
//     }
//     return total

// }

// console.log(calculateTotalPrice(arr, 'chips'))


// console.log(calculateFullWarehousePrice(products));
