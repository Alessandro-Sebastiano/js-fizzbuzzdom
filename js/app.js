"use strict";

var container = document.querySelector('.container');



for (var i = 1; i <= 100; i++) {

    if (i % 3 != 0 && i % 5 != 0) {
        makeBox(i);
        //console.log(i);
    }

    if (i % 3 == 0 && i % 5 == 0) {
        makeBox('FizzBuzz');
        //console.log('FizzBuzz');
    } else if (i % 3 == 0) {
        //console.log('Fizz');
        makeBox('Fizz');
    } else if (i % 5 == 0) {
        makeBox('Buzz');
        //console.log('Buzz');
    }

}


function makeBox(element) {

    const box = document.createElement('div');
    box.classList.add('box');
    container.append(box);
    box.innerHTML = element;

    if (element == 'Fizz') {
        box.style.backgroundColor = 'green';
    } else if (element == 'Buzz') {
        box.style.backgroundColor = 'yellow';
    } else if (element == 'FizzBuzz') {
        box.style.backgroundColor = 'lightblue';
    }

}