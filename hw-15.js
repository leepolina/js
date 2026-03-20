// //1
// const users = [
//   { name: "User1", balance: 7000 },
//   { name: "User2", balance: 3500 },
//   { name: "User3", balance: 3000 },
//   { name: "User4", balance: 2500 },
//   { name: "User5", balance: 4916 },
// ];

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916

//2
// const users = [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Briana Decker", "Goldie Gentry"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry"],
//   },
// ];

// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter((user) => user.friends.includes(friendName))
//     .map((user) => user.name);
// };

// console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// 3

// const users = [
//   { name: "Moore Hensley", friends: ["a"] },
//   { name: "Sharlene Bush", friends: ["a", "b"] },
//   { name: "Elma Head", friends: ["a", "b", "b"] },
//   { name: "Carey Barr", friends: ["a", "b", "a", "a"] },
//   { name: "Blackburn Dotson", friends: ["a", "b", "c", "d", "e"] },
//   { name: "Sheree Anthony", friends: ["a", "b", "a", "a", "b", "a"] },
//   { name: "Ross Vazquez", friends: ["a", "b", "a"] },
// ];

// const getNamesSortedByFriendsCount = (users) => {
//   return users
//     .slice()
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((user) => user.name);
// };

// console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//4

// const users = [
//   {
//     name: "Moore Hensley",
//     skills: ["ipsum", "lorem"],
//   },
//   {
//     name: "Sharlene Bush",
//     skills: ["ipsum", "amet", "elit"],
//   },
//   {
//     name: "Elma Head",
//     skills: ["adipisicing", "commodo", "non"],
//   },
//   {
//     name: "Carey Barr",
//     skills: ["culpa", "velit", "tempor"],
//   },
//   {
//     name: "Blackburn Dotson",
//     skills: ["anim", "proident", "laborum"],
//   },
//   {
//     name: "Sheree Anthony",
//     skills: ["mollit", "xe", "veniam"],
//   },
//   {
//     name: "Ross Vazquez",
//     skills: ["irure", "nulla", "nostrud"],
//   },
// ];

// const getSortedUniqueSkills = (users) => {
//   const allSkills = [];

//   for (const user of users) {
//     for (const skill of user.skills) {
//       allSkills.push(skill);
//     }

//     к;
//   }

//   return allSkills
//     .filter((skill, index, array) => array.indexOf(skill) === index)
//     .sort();
// };
// console.log(getSortedUniqueSkills(users));
