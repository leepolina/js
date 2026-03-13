//1 Використати деструктуризацію об’єктів у всіх завданнях з попередньої ДЗ
//(6 задач '1.1, 1.2, 1.3, 1.4, 1.5, 1.6')

//1.1

// const user = {
//   name: "Polina",
//   age: 16,
//   hobby: "reading",
//   premium: true,
// };

// const {name, age, hobby, premium} = user
// console.log(name,age,hobby, premium)

//1.2

// const pet = {
//   name: "cat",
//   age: 2,
//   breed: "scottish fold",
//   color: "grey",
// };

// const { name, age, breed, color } = pet;
// console.log(name, age, breed, color);

//1.3
// const employees = {
//   Polina: 100,
//   Marie: 56,
//   Zhanek: 78,
//   Ainura: 67,
// };

// const { Polina, Marie, Zhanek, Ainura } = employees;
// console.log(Polina, Marie, Zhanek, Ainura);

//1.4
// const employees = {
//   John: 1800,
//   Marie: 900,
//   Bloom: 2800,
// };

// const {John, Marie, Bloom} = employees
// console.log(John, Marie, Bloom)

//1.5
// const objArr = [
//   { name: "kiwi", price: 50 },
//   { name: "strawberry", price: 150 },
//   { name: "candy", price: 95 },
// ];

// const [first, second, third] = objArr;
// console.log(first, second, third);

//1.6
// const arr = [
//   { name: "chips", price: 110, quantity: 3 },
//   { name: "cake", price: 110, quantity: 10 },
//   { name: "cookie", price: 110, quantity: 2 },
//   { name: "blueberry box", price: 110, quantity: 1 },
// ];

// const [first, second, third, fourth] = arr;
// console.log(first, second, third, fourth);

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */
const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій

  transactions: [],
  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */

  createTransaction(amount, type) {
    return {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    };
  },
  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Виведення такої суми неможливе.");
      return;
    }
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },
  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (this.transaction.id === id) return transaction;
    }
  },

  /*

   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let total = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    }

    return total;
  },
};
