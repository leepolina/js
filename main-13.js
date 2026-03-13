// let user = {
//   name: "Kate",
//   skills: ["JS", "React"],
//   age: 28,
// };

// const { name, skills, age, country = "Ukraine" } = user;

// console.log(name, skills, age, country);

// const colors = ["red", "green", "blue"];

// const [color1, color2 = "transparant", color3] = colors;

// console.log(color2);

//ОПЕРАТОР rest = ...

// const [first, ...colorsSubArr] = colors;
// console.log(first);
// console.log(colorsSubArr);

// function createStudent({ name, ...info }) {
//   return `student ${name} additional information ${JSON.stringify(info)} `;
// }

// console.log(
//   createStudent({
//     name: "Оля",
//     age: 14,
//     course: "JavaScript",
//     level: "beginner",
//   }),
// );

// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
// };

// const { name, age, email } = user;
// console.log(email);

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  features: ["power windows", "rear camera", "navigation"],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true,
  },
};

const {
  make,
  model,
  year,
  features: [var1, var2, var3],
  safety: { airbags, antilock_brakes, stability_control },
} = car;
console.log(var1);
