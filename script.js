let firstNumber;
let operator;
let secondNumber;

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