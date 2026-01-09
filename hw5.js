// Створіть змінну, що симулює вибір варіанта зі списку. Виводьте повідомлення залежно від обраного варіанта: "Кава", "Чай" або "Сік". Використайте switch
// Створіть змінну для зберігання введеного рядка, який може бути днем тижня. Якщо це робочий день — виведіть повідомлення про робочий день, якщо вихідний — про вихідний.
// Створіть змінну для зберігання номера місяця. За номером місяця визначайте пору року і виводьте відповідне повідомлення.
// Створіть змінну для зберігання назви кольору. Виводьте повідомлення відповідно до вибраного кольору: якщо "червоний" — "стоп", "зелений" — "йти", "жовтий" — "чекати".
// Створіть змінні для зберігання двох чисел та оператора (як у списку select). Виконайте відповідну операцію та виведіть результат. У випадку ділення на нуль — виведіть попередження.

let a = Number(prompt("Choose the drink you want to drink"));
let drink;
let menuText;

switch (a) {
  case 1:
    menuText = "Juice";
    break;

  case 2:
    menuText = "Tea";
    break;

  case 3:
    menuText = "Coffee";
    break;
}

console.log(menuText);

let b = prompt("Enter the day");
let day;
let dayMessage;

switch (b) {
  case "понеділок":
  case "вівторок":
  case "середа":
  case "четвер":
  case "п'ятниця":
    dayMessage = "Це робочий день";
    break;
  case "субота":
  case "неділя":
    dayMessage = "Це вихідний день";
    break;
}

console.log(dayMessage);

let c = Number(prompt("Enter the number of month"));
let month;

switch (c) {
  case 1:
    month = "January";
    break;
  case 2:
    month = "February";
    break;
  case 3:
    month = "March";
    break;
  case 4:
    month = "April";
    break;
  case 5:
    month = "May";
    break;
  case 6:
    month = "June";
    break;
  case 7:
    month = "July";
    break;
  case 8:
    month = "August";
    break;
  case 9:
    month = "September";
    break;
  case 10:
    month = "October";
    break;
  case 11:
    month = "November";
    break;
  case 12:
    month = "December";
    break;
}
console.log(month);

let d = prompt("Enter the color");
let color;

switch (d) {
  case "red":
    color = "stop";
    break;
  case "yellow":
    color = "wait";
    break;
  case "green":
    color = "go";
    break;
}

console.log(color);

let e = prompt("Enter numbers");
let num1 = 10;
let num2 = 0;
let result;

switch (e) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    if (num2 === 0) {
      console.log("Помилка: ділення на нуль");
    } else {
      result = num1 / num2;
      console.log(result);
    }
    break;

  default:
    result = "Невідома операція";
}
console.log(result);
