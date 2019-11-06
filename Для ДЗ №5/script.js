'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName('adv')[0],
    promptForApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement('li');

menu.insertBefore(menuItem[2], menuItem[1]);

menuItemLi.classList.add('yellow');
menuItemLi.textContent = "Пятый элемент";
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";  

title.textContent = "Мы продаем только подлинную технику Apple";

adv.remove();

let yourOpinion = prompt("Спросить у пользователя отношение к технике apple");
promptForApple.textContent = yourOpinion;


// adv.innerHTML = '<h1>hello world!</h1>';
// adv.textContent = 'hello world!';

// let li = document.createElement('menu-item'),
//     text = document.createTextNode('dgjgfdgf');

// li.classList.add('yellow');

// body.removeChild(li.menu-item[0]);
// document.body.nav.menu.insertBefore(li, menu-item[0]);
// menu.appendChild(li);

// ul.menu.appendChild(ul);
// document.body.header.removeChild(ul, adv);
// div.classList.add('black');
// div.textContent = 'hello world!';


// menu-item[2] = menu-item
// [3];