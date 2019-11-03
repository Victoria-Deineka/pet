let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?",''),
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?",'');
    }
}
start();

let appData = {
    budjet: money,
    timeData: time,
    optionalExpenses: {},
    savings: true,
    income: [],
    expenses: {},
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = +prompt("Введите обязательную статью расходов в этом месяце",''),
            b = +prompt("Во сколько обойдется?",'');
    
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } 
    }
}
chooseExpenses();

appData.moneyPerDay = (appData.budjet / 30).toFixed();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальый уровень достатка")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Vysokiy");
    } else {
        console.log("Oshibka");
    }
}
detectLevel();


function chooseOptExpenses() {
        let i = 0;
        do {
            let a = prompt("Статья необязательных расходов?",''),
                b = +prompt("Во сколько обойдется?",'');
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '') {
            appData.optionalExpenses[a] = b;
            i++;
            }  
        }
        while (i < 3);
}
chooseOptExpenses();

console.log(appData);

// if (appData.moneyPerDay < 100) {
//     console.log("Минимальый уровень достатка")
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Vysokiy");
// } else {
//     console.log("Oshibka");
// }

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Kakova suma krch?");
            percent = +prompt("Pod kakoi procent?");

        appData.monthIncome = save/100/12*percent;
        alert("Dohod v mesyac: " + appData.monthIncome)
    }
}
checkSavings();

function detectDayBudget() {
    if (appData.savings == true) {
        let save = +prompt("Kakova suma trat v mesyac?");

        appData.dayBudjet = save/30;
        alert("Traty v den: " + appData.dayBudjet)
    }
}
detectDayBudget();


// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage("Hello world");
// console.log(num)



// let calc = function(a,b) {
//     return (a + b);
// }

// let calc = (a,b) => a+b

// console.log(calc(3, 4));
// console.log(calc(8, 4));

// function retVar() {
//     let num = 30;
//     return num;
// }

// let anotherNum = retVar();
// console.log(anotherNum);

// let str = "test";
// console.log(str.length);

// console.log(str.toUpperCase());

// let twelve = "12.2px";

// // console.log(Math.round(twelve));
// console.log(parseFloat(twelve));