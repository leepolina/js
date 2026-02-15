const bankAccount = {
  ownerName: "Polina",
  accountNumber: 12345,
  balance: 100000000000,
  deposit: function () {
    const total = Number(prompt("How much is your deposit?"));
    this.balance += total;
  },
  withdraw: function () {
    const total = Number(prompt("How much is your withdraw?"));
    this.balance -= total;
  },
};
// bankAccount.deposit();
bankAccount.withdraw();
console.log(bankAccount);

//2
// const weather = {
//   temprature: Number(prompt("Enter today's temprature outside")),
//   humidity: 8,
//   windSpeed: 10,
//   check: function () {
//     if (this.temprature > 0) {
//       return "temprature is bigger than 0'C";
//     } else if (this.temprature < 0) {
//       return "temprature is lower than 0'C";
//     }
//   },
// };

// console.log(weather.check());

// 3;
// const user = {
//   name: "polina",
//   email: "pgrib68@gmail.com",
//   password: "123456789",

//   login: function () {
//     const enterEmail = prompt("Enter your email");
//     const enterPassword = prompt("Enter your password");

//     if (enterEmail === this.email && enterPassword === this.password) {
//       alert("You loged in!");
//     } else {
//       alert("incorrect password or email, try again");
//     }
//   },
// };
// user.login();

//4

// const movie = {
//   title: "Moana",
//   director: "Mr.BLA Bla",
//   year: 2024,
//   rating: 8,
//   checkRating: function () {
//     if (this.rating >= 8) {
//       return true;
//     } else if (this.rating < 8) {
//       return false;
//     }
//   },
// };

// console.log(movie.checkRating());
