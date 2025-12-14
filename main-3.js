//РЯДОК -  індексований набір символів взяих у лапки
//index - нумерація починається з 0!!!!!!!!

// const str = "String!";

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);

// console.log("довжина рядка" + str.length);
// // .length - метод яким ми можемо дізнатись к-стл символів
// // конкатинація - сшивання рядку "a" + "b" + "c"

// const message = "사" + "랑" + "해";
// console.log(message);

// const num = 1 + "1" + 1;

// console.log(num);
// console.log(typeof num);

// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// console.log(str);

// console.log(str.indexOf("g"));

// //.indexOf("k")//видає індекс символу, якщо немає -1

// console.log(str.includes("St")); //true/false чи є у рядку

// console.log(str.toLowerCase().includes("st"));

// // console.log(str.indexOf("S").includes("st")) //error

// console.log(str.startsWith("S")); // починається з

// // console.log(str.endsWith('!'))// закінчується на

// console.log(str.padEnd(50, ")"));
// console.log(str.padStart(50, ")"));

// //шаблонний рядок

// const p = "Polina";
// const s = "Sviatoslav";
// const i = "Illia";

// const group = `привіт мої любі учні: прекрасна ${p}, хоробрий ${i}, харизматичний ${s}`  ;

// console.log(group.trim());
// //.trim() видаляє пробіли на початку і прикінці
// const summ = `${2 + 2}`;
// console.log(summ);

// const userMinutes = Number(prompt("Введи кількість хвилин"));
// console.log(userMinutes);
// const hours = Math.floor(userMinutes / 60);
// const minutes = userMinutes - hours * 60;
// console.log(`${userMinutes}=${hours}:${minutes}`)

// const userName = "Polina Hryb";
// console.log(userName);

// console.log(userName.length);
// console.log(userName.indexOf(" "));

// console.log(userName.toUpperCase());

// console.log(userName.charAt()); //виводить перший символ

// const js = "JavaScript";
// console.log(js.replace("J", "j"));

// const sub = js.substring(4);// виводить символи після індекса , або якщо два скільки символів ми зберігаємо.
// console.log(sub);

// const str = "polina ";
// console.log(str.constructor());

// const string = "hryb";
// console.log(string.concat(str, string));

// let x = "Петрик";
// let y = "Петренко";
// let n = 404;
// let g = "готелю";

// let message = `Гість ${x} ${y} поселяється в ${n} номер ${g}`;
// // console.log(message.trim());

// let x = 10000;
// let message = `Ваш баланс поповнено на ${x}`;
// console.log(message);
// console.log(message.length);

// const orderMsg = `Ви замовляєте 15 тістечок.`;
// console.log(orderMsg.includes(15));
// console.log(orderMsg.indexOf("1"));

const blacklistedWord1 = "спам";
const blacklistedWord2 = "розпродаж";

const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
console.log(string1.toLocaleLowerCase().includes(blacklistedWord1));
console.log(string1.toLocaleLowerCase().includes(blacklistedWord2));
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
console.log(string2.toLocaleLowerCase().includes(blacklistedWord1));
console.log(string2.toLocaleLowerCase().includes(blacklistedWord2));
const string3 = "Рекламна кампанія #jsIsAwesome";
console.log(string3.toLocaleLowerCase().includes(blacklistedWord1));
console.log(string3.toLocaleLowerCase().includes(blacklistedWord2));


// && і
// || або 