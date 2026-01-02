// let subscription = prompt("Обери варіант підписки");
// let price
// if(subscription === "pro"){
//    price = '10$'
// } else if(subscription === "base"){
//     price = '5$'
// } else if(subscription === 'start'){
//     price = '3$'
// } else {
//     price = 'обери варіант'
// }

// console.log(price)

//SWITCH

// switch (subscription) {
//   case "pro":
//     price = "10$";
//     break;
//   case "base":
//     price = "5$";
//     break;
//   case "start":
//     price = "3$";
//     break;
//   default:
//     price = "обери варіант";
// }
// console.log(price);

//ОБЛАСТЬ ВИДИМОСТІ
// let global = 17;
// let a = 888
// let b = 333

// if (true) {
//   let a = 10;
// }

// if (true) {
//   let b = 10;
// }

// console.log(global);
// console.log(b);
// console.log(a);

// let p;
// let browser = "Edge";
// if (browser == "Edge") {
//   p.textContent = "You've got the Edge!";
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   p.textContent = "Ми підтримуємо і ці браузери";
// } else {
//   p.textContent = "Маємо надію, що ця сторінка виглядає добре!";
// }

// switch (browser) {
//   case "Edge":
//     p = "You've got the Edge!";
//     break;
//   case "Chrome":
//   case "Safari":
//   case "Opera":
//     p = "Ми підтримуємо і ці браузери";
//     break;
//   default:
//     p = "Маємо надію, що ця сторінка виглядає добре!";
// }
// console.log(p);

let a = Number(prompt("Write here something"));
let p;

// if (a === 0) {
//    p.textContent = 0;
// }
// if (a === 1) {
//   p.textContent = 1;
// }

// if (a === 2 || a === 3) {
//   p.textContent = '2,3';
// }

switch (a) {
  case 0:
    p = 0;
    break;

  case 1:
    p = 1;
    break;

  case 2:
  case 3:
    p = "1, 2, 3";
    break;

  default:
    p = "Обери число";
}
console.log(p);
