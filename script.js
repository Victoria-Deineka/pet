'use strict';

// let person = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(person["name"]);

// let arr = ['plum.png','orange.png','apple.jpg'];

// console.log(arr[2]);

// alert("hello world!");

// let answer = confirm("Are you here?");

// console.log(answer);

let money = +prompt("Ваш бюджет на месяц?","Yes");
let time = +prompt("Введите дату в формате YYYY-MM-DD","YYYY-MM-DD");
let qstn1 = prompt("Введите обязательную статью расходов в этом месяце","Yes");
let qstn2 = +prompt("Во сколько обойдется?","YYYY-MM-DD");

let appData = {
    budjet: money,
    timeData: time,
    optionalExpenses: {},
    savings: false,
    income: [],
    expenses: {
        qstn1: qstn1, 
        qstn2: qstn2,
    }
}

alert ("Бюджет на 1 день:"+qstn2/30);

console.log(appData)

// console.log(typeof(answer));

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(incr++);
// console.log(decr--);
// console.log(5%2);