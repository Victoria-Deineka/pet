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

let money = +prompt("Ваш бюджет на месяц?",""),
    time = +prompt("Введите дату в формате YYYY-MM-DD","");

let appData = {
    budjet: money,
    timeData: time,
    optionalExpenses: {},
    savings: false,
    income: [],
    expenses: {},
};

// let i = 0;
// while (i < 2) {
//     let a = +prompt("Введите обязательную статью расходов в этом месяце",''),
//         b = +prompt("Во сколько обойдется?",'');
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//      i++;
//      } 
// }

// let i = 0;
// do {
//     let a = +prompt("Введите обязательную статью расходов в этом месяце",''),
//         b = +prompt("Во сколько обойдется?",'');
//     i++;
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//     i++;
//     }  
// }
// while (i < 2);

for (let i = 0; i < 2; i++) {
    let a = +prompt("Введите обязательную статью расходов в этом месяце",''),
        b = +prompt("Во сколько обойдется?",'');

    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } 
}

appData.moneyPerDay = appData.budjet/30;
alert("fdsfd:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальый уровень достатка")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний");
} else if (appData.moneyPerDay > 2000) {
    console.log("Vysokiy");
} else {
    console.log("Oshibka");
}
// console.log(appData)

// alert ("Бюджет на 1 день:"+qstn2/30);

// console.log(typeof(answer));

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(incr++);
// console.log(decr--);
// console.log(5%2);

// if (2*4 == 8) {
//     console.log("verno")
// } else {
//     console.log("neverno")
// }

// for (let i = 1; i < 8; i++){
//     if (i==6) {
//         continue
//     }
//     console.log(i)
// }