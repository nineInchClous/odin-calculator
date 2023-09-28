let firstNumber = 0;
const operator = '';
let secondNumber = 0;

const display = document.getElementById('display');

// Events
document.getElementById('0').addEventListener('click', () => {
  printOperation();
});
document.getElementById('1').addEventListener('click', () => {
  firstNumber += 1;
  printOperation();
});
document.getElementById('2').addEventListener('click', () => {
  firstNumber += 2;
  printOperation();
});
document.getElementById('3').addEventListener('click', () => {
  firstNumber += 3;
  printOperation();
});
document.getElementById('4').addEventListener('click', () => {
  firstNumber += 4;
  printOperation();
});
document.getElementById('5').addEventListener('click', () => {
  firstNumber += 5;
  printOperation();
});
document.getElementById('6').addEventListener('click', () => {
  firstNumber += 6;
  printOperation();
});
document.getElementById('7').addEventListener('click', () => {
  firstNumber += 7;
  printOperation();
});
document.getElementById('8').addEventListener('click', () => {
  firstNumber += 8;
  printOperation();
});
document.getElementById('9').addEventListener('click', () => {
  firstNumber += 9;
  printOperation();
});

function btnClick(btnValue) {
  if (!operator) {
    firstNumber += btnValue;
  } else {
    secondNumber += btnValue;
  }
  printOperation();
}
function printOperation() {
  display.textContent = firstNumber + operator + secondNumber;
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
