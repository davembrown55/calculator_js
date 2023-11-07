const calcDisplay = document.querySelector('#display');

// const calcDisplay = document.querySelector('#display');
// const calcDisplay = document.querySelector('#display');
// const calcDisplay = document.querySelector('#display');
// const calcDisplay = document.querySelector('#display');

// calcDisplay.innerHTML = 'change me';

let numberOne = "";
let operator;
let numberTwo;
let result;

const add =  (numOne, numTwo) =>  numOne + numTwo;
const subtract =  (numOne, numTwo) =>  numOne - numTwo;
const multiply =  (numOne, numTwo) =>  numOne * numTwo;
const divide =  (numOne, numTwo) =>  numOne / numTwo;

const operate = (operator, num1, num2) => operator(num1, num2);

console.log(operate(add, 10, 12));
console.log(operate(subtract, 10, 12));
console.log(operate(multiply, 10, 12));
console.log(operate(divide, 20, 5));
console.log(operator);


const storeVal = function (val) {
    if (typeof operator === 'undefined' || operator === null) {
        // console.log(`winnets! ${val}` );
        // parseInt(val, 10);
        numberOne += val;
        calcDisplay.innerHTML = `${numberOne}`;
    }
    
};

const resetDisp = function() {
    numberOne = "0";
    numberTwo = "0";
    operator = null;
    result = "0"
    calcDisplay.innerHTML = `${numberOne}`;
}




// console.log(add(1,5));
// console.log(add(10,50));
// console.log(add(12,8));

// console.log(subtract(1,5));
// console.log(subtract(10,50));
// console.log(subtract(12,8));

// console.log(multiply(1,5));
// console.log(multiply(10,50));
// console.log(multiply(12,8));

// console.log(divide(1,5));
// console.log(divide(10,50));
// console.log(divide(12,8));