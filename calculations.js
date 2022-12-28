const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculatorKeys');
const display = document.querySelector('.calculator-screen');

keys.addEventListener('click', e => {
    const key = e.target;
    const action = key.dataset.action;
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
   
    if (!action) {
        if (displayedNum === '0' || previousKeyType === 'operator') {
            display.textContent = keyContent;
        } else {
            display.textContent = displayedNum + keyContent;
        }
    }
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'

    ) {
        calculator.dataset.previousKeyType = 'operator';
        calculator.dataset.firstValue = displayedNum;
        calculator.dataset.operator = action;
    }
    if (action === 'decimal') {
        display.textContent = displayedNum + '.'
    }
    if (action === 'all-clear') {
        display.textContent = 0;
    }
    if (action === 'calculate') {
        const firstValue = calculator.dataset.firstValue;
        const operator = calculator.dataset.operator;
        const secondValue = displayedNum;

        display.textContent = operate(operator, firstValue, secondValue)
    }
   }

});


function clearAll () {
    clear.addEventListener('click', (e) => {
        screen.innerText = '0';
    })
}


document.addEventListener('click', function onClick(e) {
    if (e.keyCode === 49) {
        screen.innerText = '1';
    }
    console.log(e);

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

function operate(operator, a, b) {
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