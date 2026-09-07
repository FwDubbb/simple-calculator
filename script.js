let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '') return;
    
    if (previousInput !== '') {
        calculate();
    }
    
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function appendDecimal() {
    if (currentInput.includes('.')) return;
    if (currentInput === '') currentInput = '0';
    currentInput += '.';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    if (operator === null || currentInput === '' || previousInput === '') return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = current === 0 ? 'Error' : prev / current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || '0';
}