
function aboba () {
    let x = document.querySelector('h1');
    x.style.fontSize = '25px';
}


function changeColor () {
    let over = document.querySelector('h1');
    over.style.fontSize = '50px';
}

function mouseUp () {
    let mouseUp = document.querySelector('button');
    mouseUp.style.width = '200px';
    mouseUp.style.height = '200px';
    mouseUp.style.backgroundColor = 'black';
    mouseUp.style.color = 'white';
    mouseUp.style.transition = '0.3s';

}


function firstItem () {
    let firstItem = document.querySelector('p');
    firstItem.style.color = 'red';
}


function secondItem () {
    let secondItem = document.querySelector('h2');
    secondItem.style.color = 'blue';
    secondItem.style.cursor = 'default';
}


let sometext = 'sometext';
let someintnumber = 13n, somenumber = 13;


console.log(typeof sometext);
console.log(typeof someintnumber);
console.log(typeof somenumber);

let number = false;


console.log(typeof number);

function hrefn () {
    let x = document.querySelector('a').href = 'http://jsfiddle.net/bujvd9yr/';
}