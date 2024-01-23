let currentInput = '';
let operator = '';
let firstOperand = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (resultDisplayed) {
        resultDisplayed = false;
    }
    if (operator !== '' && currentInput !== '') {
        calculate();
    }
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
    updateDisplay();
}

function calculate() {
    let result;
    const secondOperand = currentInput;
    
    if (operator === '+') {
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
    } else if (operator === '-') {
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
    } else if (operator === '*') {
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
    } else if (operator === '/') {
        if (parseFloat(secondOperand) !== 0) {
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
        } else {
            result = 'Error';
        }
    }

    currentInput = result.toString();
    operator = '';
    firstOperand = '';
    resultDisplayed = true;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    resultDisplayed = false;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}
