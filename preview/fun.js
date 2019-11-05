alert( null || 2 && 3 || 4 );
let pizdec = [ ] + 1 + 2;
a = [1, 2, 3]; 
b = [1, 2, 3]; 
console.log(a==b);
console.log(pizdec);

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
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = +prompt("Введите обязательную статью расходов в этом месяце",''),
                b = +prompt("Во сколько обойдется?",'');
        
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } 
        }
    },
    detectDayBudget: function() {
        if (appData.savings == true) {
            let save = +prompt("Kakova suma trat v mesyac?");
    
            appData.dayBudjet = (save/30).toFixed();
            alert("Traty v den: " + appData.dayBudjet)
        }
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальый уровень достатка")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Vysokiy");
        } else {
            console.log("Oshibka");
        }
    },
    chooseOptExpenses: function() {
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
    },
    checkSavings: function() {
         if (appData.savings == true) {
        let save = +prompt("Kakova suma krch?");
            percent = +prompt("Pod kakoi procent?");

        appData.monthIncome = save/100/12*percent;
        alert("Dohod v mesyac: " + appData.monthIncome)
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесёт дополнительный доход? (через запятую)", '')
            appData.income.push(prompt("Mojet esce sho?"));

            if ( (typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
                console.log("done");
                appData.income = items.split(', ');
                appData.income.sort();
                i++;
                } 
            }   
        appData.income.forEach(function(item, i, mass){
            console.log(i+1 + ' Способы доп. заработка: ' + mass)
        });
    }
};

for (key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}

appData.moneyPerDay = (appData.budjet / 30).toFixed();

// console.log(appData);


// if (appData.moneyPerDay < 100) {
//     console.log("Минимальый уровень достатка")
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log("Средний");
// } else if (appData.moneyPerDay > 2000) {
//     console.log("Vysokiy");
// } else {
//     console.log("Oshibka");
// }



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