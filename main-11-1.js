// const employee = {
//   name: "Oleh",
//   age: 55,
//   skills: ["js", "react", "node"],
//   isHuman: true,
// };
// //дізнатись значення по ключу
// console.log(employee.name);
// console.log(employee["name"]);

// // створили нову властивість->
// employee.workExperience = "5years";

// //видалити якусь властивість
// delete employee.age;

// console.log(employee);

// //якщо властивості немає, то видає undefined
// console.log(employee.color);

// const character = {
//   name: "Harry Potter",
//   friends: ["Ron Weasley", "Hermione Granger"],
//   enemies: [
//     "Dolores Umbridge",
//     "Draco Malfoy",
//     "Dark wizard Gellert Grindelwald",
//   ],
//   house: "Gryffindor",
//   superpower: ["Sacrificial Protection", "Snake language", "DADA"],
//   wind: {
//     wood: "Holly",
//     core: "Phoenix feather",
//     length: "11 inches",
//   },
// };

// console.log(character);

// const name = "Dobby";
// const ability = "magic";

// const character = {
//   name: name,
//   ability,
//   getName: function(){
//     return `імя персонажа ${this.name}`
//   }
// };

// console.log(character.getName());

// Створіть об'єкт "book" з властивостями "title", "author", "year" та "genre". Додайте до об'єкту метод, який дозволить змінювати значення властивостей.

// const book = {
//   title: "Graph Monte Kristo",
//   author: "Alexsendre Duma",
//   year: 1844,
//   genre: "romance",
//   change: function () {
//     return (this.genre = "drama");
//   },
// };

// book.change();
// console.log(book);

// Створіть об’єкт "сar", який буде мати властивості "brand", "model", "year" та "color". Додайте метод, який буде виводити на екран повідомлення про автомобіль зі значеннями всіх властивостей

// const car = {
//   brand: "Ford",
//   model: "Mustang",
//   year: 2025,
//   color: "white",
//   message: function () {
//     return `You chose a  ${this.brand}, ${this.model} , ${this.year} in ${this.color}`;
//   },
// };
// console.log(car.message());

// const restaurant = {
//   name: "Very Well Cafe",
//   cuisine: "European&Italien",
//   address: "st. khreshatyk 2",
//   rating: 5,
//   changeAddress: function () {
//     this.address = "st. Velyka Vasilkivs'ka";
//   },
//   changeRating: function () {
//     this.rating += 1;
//   },
// };

// restaurant.changeRating();
// restaurant.changeAddress();
// console.log(restaurant);

// Ви сказали:
// Творчі завдання
// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === product.name) {
        this.items[i].quantity += 1;
        return;
      }
    }
    product.quantity = 1;
    this.items.push(product);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === productName) {
        if (this.items[i].quantity > 1) {
          this.items[i].quantity -= 1;
        } else {
          this.items.splice(i, 1);
        }
        return;
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i].price * this.items[i].quantity;
    }
    return total;
  },
  increaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === productName) {
        this.items[i].quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === productName) {
        if (this.items[i].quantity > 1) {
          this.items[i].quantity -= 1;
        } else {
          this.items.splice(i, 1);
        }
        return;
      }
    }
  },
};

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 70 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });

console.log(cart.getItems());
cart.remove("🍎");
cart.remove("🍓");
console.log(cart.getItems());
console.log("Сума до оплати:", cart.countTotalPrice());

cart.increaseQuantity("🍋");
console.log("Кількість:", cart.increaseQuantity());

cart.decreaseQuantity("🍇");
