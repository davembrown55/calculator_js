const calcDisplay = document.querySelector('#main-display');
const calcSmallDisplay = document.querySelector('#smaller-display');

const textRight = () => {
    calcDisplay.style.textAlign = "right"
    calcDisplay.style.float = "right"
};

const textLeft = () => {
    calcDisplay.style.textAlign = "left"
    calcDisplay.style.float = "left"
};

const resetDisp = () => {
    textRight();
    calcDisplay.innerHTML = `0`;}

const smallFontBlack = () => calcSmallDisplay.style.color = "black";
const resetSmallDisplay = () => {
    calcSmallDisplay.style.color = "moccasin";
    workingOut = "";
    updateDisplay('0');
}

textRight();
let numberOne = "";
let operator = null;
let numberTwo = "";
let result = "";
let workingOut = "";

const add =  (numOne, numTwo) =>  numOne + numTwo;
const subtract =  (numOne, numTwo) =>  numOne - numTwo;
const multiply =  (numOne, numTwo) =>  numOne * numTwo;
const divide =  (numOne, numTwo) =>  numOne / numTwo;

const operate = function (operator, numOne, numTwo) { 
    switch(operator) {
        case "+":
            return  add(Number(numOne), Number(numTwo));       
        case "-":
            return subtract(Number(numOne), Number(numTwo)); 
        case "/":
            return divide(Number(numOne), Number(numTwo));  
        case "x":
            return multiply(Number(numOne), Number(numTwo));     
    }
}

// const decimal = (num) => num.includes('.');

const updateDisplay = (number) => calcDisplay.innerHTML = `${number}`;
const updatesmallDisplay = (workingsOut) => calcSmallDisplay.innerHTML = `${workingsOut}`;

const storeVal = function (val) {
    textRight();

    if (typeof operator === 'undefined' || operator === null) {
        result = "";
        resetSmallDisplay();

        if(val === "." && numberOne.includes('.')){ // already decimal? do nothing
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
    textRight();
    operator = op;
    if(result !== "") {
        workingOut = `${result} ${operator}`;
        numberOne = result;
    } else if (result === ""){
        workingOut += (`${numberOne} ${operator}` );
    };    
    smallFontBlack();
    updatesmallDisplay(workingOut);
};

// what happens to small screen when equals is pressed / when C is pressed

const resetVars = (val) => {
    if (val === 'C') {

        resetDisp();
        resetSmallDisplay();
    } else if(val !== 'C' && result.toString().length >= 10 ){
        textLeft(); 
        calcDisplay.innerHTML = `${result}`;
    } else {
        calcDisplay.innerHTML = `${result}`;
    }
    numberOne = "";
    numberTwo = "";
    operator = null;
}    



const getResult = function () {    
    if(operator === null && numberOne == "") {return;};    // if no values stored: do nothing. 
    if(operator === null && numberOne !== "") { // if only num 1 entered.    
        calcDisplay.innerHTML = `${numberOne}`
        return;
    };  
    if (workingOut.includes('=')) { // if result already worked out
        resetSmallDisplay();
        resetVars();
    } else if (!workingOut.includes('=')) { // all the rest
        result = operate(operator, numberOne, numberTwo);
        workingOut += (` ${numberTwo} =`);
        updatesmallDisplay(workingOut);
        resetVars();
    }    
}



