// let age = 55
// let group = ''

// switch(true){
//     case age >= 0 && age < 18:
//         group='kids'
//         break;
//     case age > 18 && age <=60:
//         group='adult'
//         break
//     case age > 60 && age <= 100:
//         group='retired'
//         break
//     default:
//         group='undefined'
// }

// console.log(group)

// let lang = "kr";
// let month;

// switch (lang) {
//   case "ua":
//     month = "Грудень";
//     break;
//   case "eng":
//     month = "December";
//     break;
//   case "kr":
//     month = "12월";
//     break;
//   case "fr":
//     month = "décembre";
//     break;
// }

// console.log(month);

// let message;
// let a = 1;

// switch (a) {
//   case 1:
//     message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
//     break;
//   case 2:
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посилка буде відправлена сьогодні";
//     break;
//   default:
//     message = "Вам передзвонить менеджер";
// }
// console.log(message);

let money = prompt("Enter your budget");
let a = 1;
let message;

switch (money) {
  case "1":
    message = "☆";
    break;
  case "2":
    message = "☆☆";
    break;
  case "3":
    message = "☆☆☆";
    break;
  case "4":
    message = "☆☆☆☆";
    break;
  case "5":
    message = "☆☆☆☆☆";
    break;

  default:
    message = "Такої кількості зірочок немає";
}

console.log(message);
