//інтерфейс

// class Shape {
//   area() {
//     return "формула площі?";
//   }
// }
// // успадковується за допомогою extends
// class Rectangle extends Shape {
//   constructor(width, height) {
//     super(); //використовується для виклику і батьківського класу
//     this.width = width;
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }

//   //метод getter(getЩОСЬ) - дізнатись значення чогось
//   // якщо хочемо щось задати або змінити і напишемо set, то це буде setter
//   getWidth() {
//     return this.width;
//   }
// }
// //протитип - те від чого успадковується об'єкт
// const rect = new Rectangle(5, 10);

// console.log(rect.area());
// console.log(rect);
// console.log(rect.__proto__ === Rectangle.prototype);

// //ІНКАПСИЛЯЦІЯ - ЦЕ МАЄМО ДОСТУП ДО ПУБЛІЧНИХ ВЛАСТИВОСТЕЙ
// class User {
//   static Roles = {
//     ADMIN: "admin",
//     COLABORATOR: "colaborator",
//   };

//   name;
//   #email;
//   constructor({ email, name }) {
//     this.#email = email;
//     this.name = name;
//   }
//   get Email() {
//     return this.#email;
//   }
//   set Email(text) {
//     this.#email = text;
//   }
// }

// const polina = new User({
//   email: "polinapolina2233@gmail.com",
//   name: "Polina",
//   role: User.Roles.ADMIN,
// });
// // polina.#setEmail("popopopopopopopo@gmail.com");
// console.log(polina);

// function Profile({ username, country }) {
//   this.username = username;
//   this.country = country;
// }

// Profile.prototype.showProfile = function () {
//   console.log(`username = ${this.username}`);
// };

// const user1 = new Profile({
//   username: "Anna",
//   country: "Ukraine",
// });

// user1.showProfile();

// class Animal {
//   constructor({ name, type, age }) {
//     this.name = name;
//     this.type = type;
//     this.age = age;
//   }
//   getInfo() {
//     return `name = ${this.name}, ${this.age} , type=${this.type}, age = ${this.age}`;
//   }
// }

// const dog = new Animal({
//   name: "Buddy",
//   type: "dog",
//   age: 5,
// });
// console.log(dog.getInfo());

class Playlist {
  constructor(songs) {
    this.songs = songs;
  }
  getSongs() {
    return this.songs;
  }
  addSong(song) {
    this.songs.push(song);
  }
  removeSong(song) {
    const index = this.songs.indexOf(song);

    if (index !== -1) {
      this.songs.splice(index, 1);
    }
  }
}

const playlist = new Playlist(["Song 1", "Song 2", "Song 3"]);

console.log(playlist.getSongs());

playlist.addSong("Song 4");

playlist.removeSong("Song 2");

console.log(playlist.getSongs());
