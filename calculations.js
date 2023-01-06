const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorKeys');
const display = document.querySelector('.calculator-screen');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
 
//User replaces display content with pressed keys. If/else handles where user is in process
    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent;
        } else if (displayedNum !== '0' && previousKeyType === 'operator'){      
            display.textContent = keyContent;
        }
        else {
            display.textContent = displayedNum + keyContent;
        }
        calculator.dataset.previousKeyType = 'number'
    }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'

    ) {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;

//Should allow continual calculations pressing operators in between numbers

        if (firstValue && operator && previousKeyType !== 'operator') {
            const calculatedValue = operate(firstValue, operator, secondValue);
            display.textContent = calculatedValue;
            calculator.dataset.firstValue = calculatedValue;
        } else {
            calculator.dataset.firstValue = displayedNum;
        }
        
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
    }

//Second number can start with decimal but not the specified '0.'
    if (action === 'decimal') {
        if (!displayedNum.includes('.')) {
            display.textContent = displayedNum + '.';
        } else if (previousKeyType === 'operator') {
            display.textContent = '0.';
        }
        calculator.dataset.previousKeyType = 'decimal'
    }
    if (action === 'all-clear') {
        display.textContent = '0';
        firstValue = 0;
        secondValue = 0;
        calculator.dataset.previousKeyType = 'clear'
    }
    if (action === 'calculate') {
        let firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;
        if (firstValue){
            if (previousKeyType === 'calculate') {
                firstValue = displayedNum;
            }
        display.textContent = operate(firstValue, operator, secondValue)
        }
        calculator.dataset.previousKeyType = 'calculate'
    }
   }

});



function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
    //return array.reduce((a, b) => a * b, 1);
}

function divide (a, b) {
    return a / b;
}

function operate(a, operator, b) {
    a = parseFloat(a)
    b = parseFloat(b)
    switch (operator) {
      case 'add':
        return add(a, b)
      case 'subtract':
        return subtract(a, b)
      case 'multiply':
        return multiply(a, b)
      case 'divide':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }

/*const sum = function(array) {
	return array.reduce((partialSum, a) => partialSum + a, 0);
};*/


/*
1. Capture input and display on calculator screen
    a. Do so with a function. Store the display
    value in a variable to be used in order to 
    use the operations.
2. Clear button sets display back to 0
3. Store first input value when user selects operator
4. Operate should then use function used to populate the display
5. Figure out how to string together operations
6. Throw error on calculator display if '=' is pressed
prior to all numbers being entered or an operator 
*/