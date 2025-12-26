let text1 = "hello";
let text2 = "world";
if (text1 !== "" && text2 !== "") {
  console.log("Обидва поля заповнені");
} else {
  console.log("Не всі поля заповнені");
}

let num1 = 6;
let num2 = 4;
let sum = num1 + num2;

if (sum > 10) {
  console.log("Сума більша за 10");
} else {
  console.log("Сума менша або дорівнює 10");
}

let text = "I'm studying at JavaScript course.";
if (text.includes("JavaScript")) {
  console.log("Text contains a word JavaScript");
} else {
  console.log("Text does not contain a word JavaScript");
}

let number = 15;

if (number > 10 && number < 20) {
  console.log("Число входить в діапазон від 10 до 20");
} else {
  console.log("Число не входить в діапазон від 10 до 20");
}

let name = "Polina";
let email = "pgrib68@gmail.com";
let password = "1234567890";
if (
  (name.length >= 3 && email.includes("@") && email.includes(".")) ||
  (email.indexOf("@") && password.length >= 6)
) {
  console.log("Перенаправлення на іншу сторінку");
} else {
  console.log("Помилка: неправильне заповнення");
}
