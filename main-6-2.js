// for(let i=1; i<=15; i+=1){
//     console.log(`15*${i}=${15*i}`)
// }

// let k=0
// while(k<10){
//     k+=1
//     console.log('глюк')
// }

// do{
//     k+=1
//     console.log('глюк', k)
// }while(k>10)

// let number = 0

// do{
//     number = Number(prompt('введи число більше ніж 100 or die'))
// }while(number<100)

//     console.log(number)

// for(let i=0;i<10; i+=1){
//     if(i%2===0){
//         continue //дозволяє пропустити ітерацію циклу

//     }
//     console.log(i)
// }

// for (let i = 1; i < 10; i +=2) {
//   console.log(i);
// }

// const employees = 20;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.random() * (5000 - 500 + 1) + 500;
//   console.log(`зп працівника ${i} = ${salary}`);
//   totalSalary += salary;
// }
// console.log(`загальний видаток на зп = ${totalSalary}`);



const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const attempt = 3 

for(let i = 1; i<=attempt; i +=1){
    const password = prompt('введіть пароль адміністратора')
    if(password===null){
        message='Скасовано користувачем!'
        break
    }else if(password===ADMIN_PASSWORD){
        message='Ласкаво просимо!'
        break
    } else{
        message='Доступ заборонений, невірний пароль'
        break
    }
}
console.log(message)

