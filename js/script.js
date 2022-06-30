'use strict'

const a = +prompt('Enter any number:');
const b = +prompt('Enter second number:');

function sumCalc(a, b){
    let result = a + b;
    console.log('Result: ' +a + ' + ' + b + ' = ' + result)
}
function subtractCalc(a, b){
    let result = a - b;
    console.log('Result: ' +a + ' - ' + b + ' = ' + result)
}
function divideCalc(a, b){
    let result = a / b;
    console.log('Result: ' +a + ' / ' + b + ' = ' + result)
}
function multiplyCalc(a, b){
    let result = a * b;
    console.log('Result: ' +a + ' * ' + b + ' = ' + result)
}

