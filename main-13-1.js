// let a = 10;
// let b = a;

// a = 17;
// console.log("a", a);
// console.log("b", b);

//(reference types) - посилальні типи даних
// let arr1 = [1, 2, 22];
// let arr2 = arr1; // в arr2 підставили посилання на arr1

// arr2.push(1111);

// console.log("arr1", arr1);
// console.log("arr2", arr2);

// let a = { name: "Kate" };
// let b = a;

// console.log(a === b);

//////КОПІЮВАННЯ ОБ'ЄКТІВ!!!!!!!!!!
//є поверхневе копіювання і глибоке

// let user = {
//   name: "Kate",
//   skills: ["JS", "React"],
// };

// let arr1 = [1, 2, 3];

//поверхневе копіювання
// const newUser = { ...user };

// let arr2 = [...arr1];

// console.log(newUser);

// /ГЛИБОКЕ КОПІЮВАННЯ
// 1
// let deepCopy = JSON.parse(JSON.stringify(user));
//2
// let deepCopy = structuredClone(user)
// user.skills.push("Node");
// console.log(deepCopy);

// const user = {
//   name: "Polina",
//   age: 16,
//   city: "Kyiv",
// };

// for (let key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

// const cart = {
//   cucumber: 3,
//   tomato: 4,
//   potato: 1,
// };

// let name = "";
// let cheapest = cart.cucumber;
// console.log(cheapest);
// for (let key in cart) {
//   if (cheapest > cart[key]) {
//     cheapest = cart[key];
//     name = key;
//   }
// }

// console.log(name);
