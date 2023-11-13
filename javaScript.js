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


const buttonPressStyling = (buttonID) => {
    buttonID.style.boxShadow = "0px 1px 2px rgba(0, 0, 0, 0.2), inset 0px 4px 8px rgba(0, 0, 0, 0.3) ";
    buttonID.style.transform = "translateZ(15px)";
    buttonID.style.background = "linear-gradient(to bottom, hsl(195, 20%, 82%) 0%, #a9b3ba 100%) ";
}

const removeButtonPressStyling = (buttonID) => {
    buttonID.style.boxShadow = null;
    buttonID.style.transform = null;
    buttonID.style.background = null;
}

textRight();
let numberOne = "";
let operator = null;
let numberTwo = "";
let result = "";
let workingOut = "";
let error = "Error!";

// const keyVals = {
//     numbers: {'1':'one' , '2': 'two','3':'three','4':'four', '5': 'five',
//     '6': 'six','7':'seven','8':'eight','9':'nine','0':'zero','.':'dec'},

//     operators: {'/':'divide', '*':'multiply', '-':'subtract', '+':'add' },
// } 

const buttons = {
    one: document.querySelector('#one'),
    two: document.querySelector('#two'),
    three: document.querySelector('#three'),
    four: document.querySelector('#four'),
    five: document.querySelector('#five'),
    six: document.querySelector('#six'),
    seven: document.querySelector('#seven'),
    eight: document.querySelector('#eight'),
    nine: document.querySelector('#nine'),
    dec: document.querySelector('#dec'),
    zero: document.querySelector('#zero'),
    divide:document.querySelector('#divide'),
    multiply: document.querySelector('#multiply'),
    subtract: document.querySelector('#subtract'),
    add: document.querySelector('#add'),
    cancel: document.querySelector('#C'),
    equals: document.querySelector('#equals'),
}

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


const updateDisplay = (number) => calcDisplay.innerHTML = `${number}`;
const updatesmallDisplay = (workingsOut) => calcSmallDisplay.innerHTML = `${workingsOut}`;

const storeVal = function (val) {
    textRight();

    if (typeof operator === 'undefined' || operator === null) {
        result = "";
        resetSmallDisplay();

        if(val === "." && numberOne.includes('.')){ // already decimal? do nothing
            updateDisplay(numberOne);
            return;
        } else {
            numberOne += val;
            updateDisplay(numberOne);            
        }
    } else{ 
        if(val === "." && numberTwo.includes('.')){
            updateDisplay(numberTwo);  
            return;
        } else {
            numberTwo += val;
            updateDisplay(numberTwo);            
        }        
    }    
};

const storeOperator = (op) => {
    textRight();    
    // num2 empty, num1 and operator already have values, or no values entered. do nothing
    if (numberOne !== "" && operator !== null && numberTwo == "" || numberOne === "" && result === "") {return;} 

    // if 2 sets of numbers already entered, calculate those. 
    //Then get entered operator ready for next calculation.
    if(numberTwo !== "") { 
        getResult();
        operator = op;
        resetDisp();
    }  
    if(numberTwo === "") {operator = op;} // numOne entered only.     
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
        result = "";
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

// Keyboard events 
document.addEventListener('keydown', (event) => {
    let keyName = event.key;
    var code = event.code;

    let keyID; 

    switch (event.key) {
        case '1':
            keyID = buttons.one;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '2':
            keyID = buttons.two;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '3':
            keyID = buttons.three;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '4':
            keyID = buttons.four;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '5':
            keyID = buttons.five;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '6':
            keyID = buttons.six;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '7':
            keyID = buttons.seven;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '8':
            keyID = buttons.eight;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '9':
            keyID = buttons.nine;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '0':
            keyID = buttons.zero;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '.':
            keyID = buttons.dec;
            storeVal(keyName);
            buttonPressStyling(keyID);
            break;
        case '*':
            keyID = buttons.multiply;
            storeOperator('x');
            buttonPressStyling(keyID);
            break;
        case '/':
            keyID = buttons.divide;
            storeOperator(keyName);
            buttonPressStyling(keyID);
            break;
        case '-':
            keyID = buttons.subtract;
            storeOperator(keyName);
            buttonPressStyling(keyID);
            break;
        case '+':
            keyID = buttons.add;
            storeOperator(keyName);
            buttonPressStyling(keyID);
            break;
        case 'Enter':
            keyID = buttons.equals;
            getResult();
            buttonPressStyling(keyID);
            break;
        case 'Delete':
            keyID = buttons.cancel;
            resetVars('C');
            buttonPressStyling(keyID);
            break;
    }


  });


document.addEventListener('keyup', (event) => {
    let keyID; 

    switch (event.key) {
        case '1':
            keyID = buttons.one;
            removeButtonPressStyling(keyID);
            break;
        case '2':
            keyID = buttons.two;
            removeButtonPressStyling(keyID);
            break;
        case '3':
            keyID = buttons.three;
            removeButtonPressStyling(keyID);
            break;
        case '4':
            keyID = buttons.four;
            removeButtonPressStyling(keyID);
            break;
        case '5':
            keyID = buttons.five;
            removeButtonPressStyling(keyID);
            break;
        case '6':
            keyID = buttons.six;
            removeButtonPressStyling(keyID);
            break;
        case '7':
            keyID = buttons.seven;
            removeButtonPressStyling(keyID);;
            break;
        case '8':
            keyID = buttons.eight;
            removeButtonPressStyling(keyID);
            break;
        case '9':
            keyID = buttons.nine;
            removeButtonPressStyling(keyID);
            break;
        case '0':
            keyID = buttons.zero;
            removeButtonPressStyling(keyID);
            break;
        case '.':
            keyID = buttons.dec;
            removeButtonPressStyling(keyID);
            break;
        case '*':
            keyID = buttons.multiply;
            removeButtonPressStyling(keyID);
            break;
        case '/':
            keyID = buttons.divide;
            removeButtonPressStyling(keyID);
            break;
        case '-':
            keyID = buttons.subtract;
            removeButtonPressStyling(keyID);
            break;
        case '+':
            keyID = buttons.add;
            removeButtonPressStyling(keyID);
            break;
        case 'Enter':
            keyID = buttons.equals;
            removeButtonPressStyling(keyID);
            break;
        case 'Delete':
            keyID = buttons.cancel;
            removeButtonPressStyling(keyID);
            break;
    }

});




