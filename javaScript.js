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
let error = "Error!";

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
            if(Number(numTwo) === 0) { return 'error'}
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
// GO THROUGH THIS WITH SOME FRESH EYES. 
// sort out the divide by zero thing
const storeOperator = (op) => {
    textRight();    

    // if 2 sets of numbers already entered, calculate those. 
    //Then get entered operator ready for next calculation.
    if(numberTwo !== "") { 
        getResult();
        operator = op;
        resetDisp();
    }
    if(numberTwo === "") {operator = op;} // numOne entered only. 
    if (numberOne !== "" && operator !== "" && numberTwo == "") {return;} // num2 empty, num1 and operator have values. do nothing
    if(result !== "") { // if prev calculation still exists
        workingOut = `${result} ${operator}`;
        numberOne = result;
    } else if (result === ""){
        workingOut += (`${numberOne} ${operator}` );
    };    
    smallFontBlack();
    updatesmallDisplay(workingOut);
};




const resetVars = (val) => {
    if (val === 'C') {
        resetDisp();
        resetSmallDisplay();
    } else if(val !== 'C' && result.toString().length >= 10 ){
        textLeft(); 
        calcDisplay.innerHTML = `${result}`;
    } else if (result === 'error'){
        updateDisplay(error);
        result = "";
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
    if (workingOut.includes('=')) { // if '=' pressed twice
        resetSmallDisplay();
        resetVars();
    } else if (!workingOut.includes('=') && numberTwo !== "") { // ready to get calculate
        result = operate(operator, numberOne, numberTwo);
        
        workingOut += (` ${numberTwo} =`);
        updatesmallDisplay(workingOut);
        resetVars();
    }    
}



