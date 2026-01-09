//ЦИКЛИ з передумовою
// while(умова==true){
//     блок дії
// }
// допоки умова правдива

// let counter = 0;
// while (counter <= 10) {
//   console.log(counter <= 10);
//   console.log(counter);
//   counter += 1;
// }

// let age = 0;
// while (age <= 18) {
//   age += 1;
//   console.log(age);
// }

//do...while  умова перевіряється після кожної ітерації
// let password =""
// do{
//     password = prompt('введи пароль не довший ніж 4 символи')
// } while(password.length > 4)

//     alert(password)

//for цикл з лічильником
for (let i = 0; i < 166; i += i * 2) {

    if(i%3===0){
        console.log('зупинка')
        continue 
        //continue перериває виконання поточної ІТЕРАЦІЇ
    }
    if(i===55){
        console.log('Брейк!!!!!')
        break
        // break повністю перериває цикл
    }
  console.log("сторінка №", i);
}



