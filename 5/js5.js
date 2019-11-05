// 3 4 5
// 'string', "string", `string`
// true false

// let a;
// console.log(a);

// const obj = {
//     name: 'Alex'
// }

// const arr = [1, 3, 5, 5]

// ~ to String

// 1)
console.log(typeof(String(null)));

// 2)
console.log(typeof("qq" + false));
console.log('http://vk.com/catalog/' + 5);

// ~ to Number

// 1)
console.log(typeof(Number(null)));
// 2)
console.log(typeof(5 + +'5'));
// 3)
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt("Hello?", '');


// false == 0, '', null, indefined, NaN

let switcher = null;

if (switcher) {
    console.log("working..")
}

switcher = 1;

if (switcher) {
    console.log("working..")
}

