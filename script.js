// Global variables
let firstNumber = 0;
let operator = '';
let secondNumber = 0;
let strDisplay = '';
let addToFirstNumber = true;

const display = document.getElementById('display');

const divideOperator = document.getElementById('/');
const multiplyOperator = document.getElementById('*');
const minusOperator = document.getElementById('-');
const plusOperator = document.getElementById('+');

// Events
document.getElementById('0').addEventListener('click', () => numberClick(0));
document.getElementById('1').addEventListener('click', () => numberClick(1));
document.getElementById('2').addEventListener('click', () => numberClick(2));
document.getElementById('3').addEventListener('click', () => numberClick(3));
document.getElementById('4').addEventListener('click', () => numberClick(4));
document.getElementById('5').addEventListener('click', () => numberClick(5));
document.getElementById('6').addEventListener('click', () => numberClick(6));
document.getElementById('7').addEventListener('click', () => numberClick(7));
document.getElementById('8').addEventListener('click', () => numberClick(8));
document.getElementById('9').addEventListener('click', () => numberClick(9));

divideOperator.addEventListener('click', () => operatorClick('/'));
multiplyOperator.addEventListener('click', () => operatorClick('*'));
minusOperator.addEventListener('click', () => operatorClick('-'));
plusOperator.addEventListener('click', () => operatorClick('+'));

document.getElementById('=').addEventListener('click', () => {
  const result = operate(firstNumber, secondNumber, operator);
  display.textContent = result;
  resetGlobalVariables();
});

document.getElementById('clear').addEventListener('click', () => {
  resetGlobalVariables();
  display.textContent = strDisplay;
});

/**
 * Reset all global variables
 */
function resetGlobalVariables() {
  firstNumber = 0;
  secondNumber = 0;
  operator = '';
  strDisplay = '';
  addToFirstNumber = true;
}

/**
 * Add the value of the clicked button to the operator variable
 * @param {string} operatorValue Value of the clicked button
 */
function operatorClick(operatorValue) {
  if (operator) {
    const result = operate(firstNumber, secondNumber, operator);
    firstNumber = result;
    secondNumber = 0;
    strDisplay = result.toString();
  } 

  operator = operatorValue;
  strDisplay += operator;
  display.textContent = strDisplay;

  addToFirstNumber = false;
}

/**
 * Add the value of the clicked button
 * @param {number} numberValue Value of the clicked button
 */
function numberClick(numberValue) {
  strDisplay += numberValue;
  display.textContent = strDisplay;

  if (addToFirstNumber) {
    firstNumber = parseInt(strDisplay);
  } else {
    secondNumber = parseInt(strDisplay.substring(strDisplay.indexOf(operator) + 1));
  }
}

/**
 * Do a mathematical operation between a and b based on the operator
 * (sum, subtraction, multiplication or division)
 * @param {number} a First number
 * @param {number} b Second number
 * @param {string} operator '+', '-', '*' or '/'
 * @returns {number} Result of the operation
 */
function operate(a, b, operator) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
  }
}

/**
 * Add two numbers
 * @param {number} a First number
 * @param {number} b Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract two numbers
 * @param {number} a First number
 * @param {number} b Second number
 * @returns {number} Subtraction of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiply two numbers
 * @param {number} a First number
 * @param {number} b Second number
 * @returns {number} Multiplication of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide two numbers
 * @param {number} a First number
 * @param {number} b Second number
 * @returns {number} Division of a and b
 */
function divide(a, b) {
  return a / b;
}
