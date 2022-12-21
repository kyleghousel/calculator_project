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

function power (a, b) {
	return Math.pow(a, b);
};

function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return subtract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      case '^':
        return power (a, b)
      default:
        return null
    }
  }

/*const sum = function(array) {
	return array.reduce((partialSum, a) => partialSum + a, 0);
};*/