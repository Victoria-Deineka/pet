// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel когда палец выход за область приложения

window.addEventListener('DOMcontentLoaded'. function () {
    let box = document.querySelector('.box');
    
    // box.addEventListener('touchstart', function (e) {
    //     e.preventDefault();
    //     console.log('Red box: touchstart');
    //     console.log(e.target);
    //     console.log(e.touches[0].target);
    //     console.log(e.changedTouches);
    //     console.log(e.targetTouches);
    // });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault();
        console.log('Red box: ' + e.touches[0].pageX);
    });

    // box.addEventListener('touched', function (e) {
    //     e.preventDefault();
    //     console.log('Red box: touched');
    // });

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Введите ваше имя');

    // let reg = /n/g;

    // // console.log(ans.search(reg));
    // // console.log(ans.match(reg));
    console.log(reg.test(ans));

    // i
    // g
    // m

    // классы символов
    // \d все цифры \D не букву
    // \w все буквы \W не букву
    // \s все пробелы \S не пробел

    // let ans = prompt('Введите ваше имя');

    // let reg = /\d/g;

    // console.log(ans.match(reg));

    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g,"*"));
    // alert('12-34-56'.replace(/-/g, ':'));

    let str = 'My name is R2D2';

    console.log(str.match(/\//i));
});