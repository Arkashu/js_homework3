'use strict'

const a = +prompt('Enter any number:');
const b = +prompt('Enter second number:');

function sumCalc(a, b){
    const result = a + b;
    console.log('Result: ' +a + ' + ' + b + ' = ' + result)
}
function subtractCalc(a, b){
    const result = a - b;
    console.log('Result: ' +a + ' - ' + b + ' = ' + result)
}
function divideCalc(a, b){
    const result = a / b;
    console.log('Result: ' +a + ' / ' + b + ' = ' + result)
}
function multiplyCalc(a, b){
    const result = a * b;
    console.log('Result: ' +a + ' * ' + b + ' = ' + result)
}

