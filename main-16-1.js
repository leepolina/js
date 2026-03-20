//процедурне програмування

// const baseSalary = 150000;
// const overtime = 20;
// const rate = 20;

// const getTotalSalary = (base, time, rate) => base + time * rate;

// console.log(getTotalSalary(baseSalary, overtime, rate));

//ООП

// const employeeSalary = {
//   baseSalary: 150000,
//   overtime: 20,
//   rate: 20,
//   getTotalSalary() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employeeSalary.getTotalSalary());

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = " Yunseul";
// console.log(dog);

// console.log(animal.isPrototypeOf(dog));

// клас - шаблон для створення об'єктів
// class Person {
//   constructor(name, age, colorEyes) {
//     this.name = name;
//     this.age = age;
//   }
//   hello() {
//     console.log(`привіт я ${this.name}`);
//   }
// }

// class Child extends Person{
//     hello(){
//         console.log(`привіт я  маленька дитина  my name is ${this.name}`)
//     }
// }
// const childAnton = new Child('Anton', 5, 'blue')
// childAnton.hello()
// const petro = new Person("Petro", 44, "brown")
// console.log(petro)
// petro.hello();

// Створіть клас Rectangle, що містить властивості width та height.
// Додайте метод getArea(), який повертає площу прямокутника.
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }

// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea());

// Створіть клас Calculator, який буде мати наступні методи: add(), subtract(), multiply(), divide(). Кожен метод приймає два аргументи - числа, які необхідно обробити. Результатом кожного методу має бути результат відповідної математичної операції.
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     if (b === 0) {
//       return "can't divide 0 ";
//     }
//     return a / b;
//   }
// }

// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна

class Animal {
  constructor(voice) {
    this.voice = voice;
  }
  getSoundOfAnimal() {
    return this.voice;
  }
}

const cat = new Animal("meow");
const dog = new Animal("arf");
const parrot = new Animal("peekaboo");
console.log(parrot.getSoundOfAnimal());
console.log(cat.getSoundOfAnimal());
console.log(dog.getSoundOfAnimal());
