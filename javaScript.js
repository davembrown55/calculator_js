const calcDisplay = document.querySelector('#display');

const rtl = () => {
    // calcDisplay.style.direction = "rtl";
    calcDisplay.style.textAlign = "right"
    calcDisplay.style.float = "right"
};


const ltr = () => {
    // calcDisplay.style.direction = "ltr";
    calcDisplay.style.textAlign = "left"
    calcDisplay.style.float = "left"
};

rtl();
let numberOne = "";
let operator = null;
let numberTwo = "";
let result = "";

const add =  (numOne, numTwo) =>  numOne + numTwo;
const subtract =  (numOne, numTwo) =>  numOne - numTwo;
const multiply =  (numOne, numTwo) =>  numOne * numTwo;
const divide =  (numOne, numTwo) =>  numOne / numTwo;

const operate = (operator, num1, num2) => operator(num1, num2);

// const decimal = (num) => num.includes('.');

const updateDisplay = (number) => calcDisplay.innerHTML = `${number}`;
// {
//     calcDisplay.innerHTML = `${number}`;
//     // This ensures that the decimal point stays at the end (visually on the left),
//     // and any additional numbers go to the right of the decimal point (visually on the right).
//     // if (number.includes('.')) {
//     //     calcDisplay.innerHTML = number.split('.').join('') + '.';
//     // }
// };

const storeVal = function (val) {
    rtl();

    if (typeof operator === 'undefined' || operator === null) {
        result = "";
        if(val === "." && numberOne.includes('.')){
            return;
        } else {
            numberOne += val;
            updateDisplay(numberOne);            
        }
    } else{ 
        if(val === "." && numberTwo.includes('.')){
            return;
        } else {
            numberTwo += val;
            updateDisplay(numberTwo);            
        }
        
    }    
};

    


const storeOperator = (op) => {
    rtl();
    operator = op;
    if(result !== "") {numberOne = result;}
};

const resetVars = (val) => {
    if (val === 'C') {
        resetDisp();
    } else if(result.toString().length >= 10 ){
        ltr(); 
        calcDisplay.innerHTML = `${result}`;
    } else {calcDisplay.innerHTML = `${result}`;}
    numberOne = "";
    numberTwo = "";
    operator = null;
}    

const resetDisp = () => calcDisplay.innerHTML = `0`;

const getResult = function () {    
    if(operator === null && numberOne == "") {resetDisp()};    
    if(operator === null && numberOne !== "") {calcDisplay.innerHTML = `${numberOne}`};    
    switch(operator) {
        case "add":
            result = add(Number(numberOne), Number(numberTwo));            
            resetVars();
            break;
        case "subtract":
            result = subtract(Number(numberOne), Number(numberTwo)); 
            resetVars();           
            break;
        case "divide":
            result = divide(Number(numberOne), Number(numberTwo));        
            resetVars();  
            break;
        case "multiply":
            result = multiply(Number(numberOne), Number(numberTwo));      
            resetVars();   
            break;
    }
}



