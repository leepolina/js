// //1 for

// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

// let string = "";

// for (let i = 0; i < friends.length; i++) {
//   string += friends[i];
//   if (i < friends.length - 1) {
//     string += ",";
//   }
// }
// console.log(string);

// //1 join()
// const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
// let string = "";

// console.log(friends.join(","));

//2 splice()

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

//видалити

const cardToRemove = cards.indexOf("Карточка-3");
if (cardToRemove !== -1) {
  cards.splice(cardToRemove, 1);
}
console.log(cards);

//додати

const cardToInsert = "Карточка-6";
cards.splice(cards.length, 0, cardToInsert);
console.log(cards);

//оновити
const cardToUpdate = "Карточка-4 lalala";
const index = cards.indexOf(cardToUpdate);

cards.splice(3, 1, cardToUpdate);

console.log(cards);
