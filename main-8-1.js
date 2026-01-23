// const array = [1, 2, 22];
// const string = "la fa ra";
// // const arrStr = string.split(" ");
//split(s) - дозволяє перетворити рядок на масив розбивши її по розподілу s
// const string = "lafara";
// const arrStr = string.split("a");
// console.log(arrStr);

// console.log(string.split(" "))
// //split перетворює рядок на масив

//.join(',')- перетворює масив на рядок
// console.log(array.join("----"));

// console.log(array.indexOf(22)); //видасть 2
// console.log(string.includes("la"));

// const fruits = ["apple", "orange", "strawberry", "blueberry"];

// const fruit = "Dragon fruit";

// console.log(fruits.includes(fruit));

// if (fruits.includes(fruit)) {
//   console.log("Ти любиш цей фрукт");
// } else {
//   console.log("Ти не любиш цей фрукт");
// }

// fruits.push("dragon fruit"); //додаємо елемент у кінець масиву
// fruits.pop()//видаляє крайній елемент
// // fruits.shift('dragon fruit') // ДОДАЄМ НА ПОЧАТОК
// // fruits.unshift()//ВИДАЛЯЄМО З ПОЧАТКУ
// console.log(fruits);

// const array = [1, 2, 3, 5, 4, 6, 22];

// // const newArr = array.slice(0, array.length); /// .slice(0,4) .slice(indexStart, index.End)
// console.log(newArr);

//.splice - змінює, додає, видаляє

// const languages = ["C", "C++", "Java", "JavaScript"];
//видалення
// languages.splice(1, 2); (індекс, к-ть елементів)
// console.log(languages);
//Додавання
//  languages.splice(1,0,"python", 'pascal', 'algol')
// (індекс, 0 (завжди щоб нічого не видалити), елементи які додаєм)
// console.log(languages)
//Заміна
// languages.splice(1,5, "python", "pascal", "algol")
//індекс, к-ть елементів для видалення, елементи які додаєм
// console.log(languages);

const languages = ["C", "C++", "Java", "JavaScript"];
const oldLang = ["python", "pascal", "algol"];
const newArr = languages.concat(oldLang);
console.log(newArr);
