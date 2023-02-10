let previousOperand = "";
let currentOperator = "";
let currentOperand = "";
let result = "";

// grab all btns and display screens
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const deleteBtn = document.getElementById("deleteBtn");
const equalBtn = document.getElementById("equalBtn");
const clearBtn = document.getElementById("clearBtn");
const operationDisplay = document.getElementById("operationSection");
const resultDisplay = document.getElementById("resultSection");

// add event listeners
numberBtns.forEach((button) =>
  button.addEventListener("click", () => chooseNumber(button.textContent))
);
operatorBtns.forEach((button) =>
  button.addEventListener("click", () => chooseOperator(button.textContent))
);

equalBtn.addEventListener("click", compute);
clearBtn.addEventListener("click", clear);
deleteBtn.addEventListener("click", removeSingleItem);

// operator functions
const add = (num1, num2) => Number(num1) + Number(num2);
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function chooseNumber(number) {
  if (number === "." && currentOperand.includes(".")) {
    return currentOperand.toString() + number.toString();
  }
  if (result !== "") {
    currentOperand += number;
    operationDisplay.textContent = `${previousOperand}${currentOperator}${currentOperand}`;
    return;
  }

  currentOperand += number;
  operationDisplay.textContent = `${previousOperand}${currentOperator}${currentOperand}`;
}
function chooseOperator(operator) {
  currentOperator = operator;

  if (result !== "") {
    currentOperand = "";
    operationDisplay.textContent = `${result}${currentOperator}`;
    return;
  }
  previousOperand = currentOperand;
  currentOperand = "";
  operationDisplay.textContent = `${previousOperand}${currentOperator}`;
}

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return subtract(num1, num2);
  }
  if (operator === "*") {
    return multiply(num1, num2);
  }
  if (operator === "/") {
    return divide(num1, num2);
  }
}

function compute() {
  result = operate(previousOperand, currentOperator, currentOperand);
  previousOperand = result;
  operationDisplay.textContent = `${previousOperand}`;
  resultDisplay.textContent = result;
}
function appendDecimal() {
  if (operationDisplay.textContent.includes(".")) return;
  {
    operationDisplay.textContent += ".";
  }
}

function removeSingleItem() {
  operationDisplay.textContent = operationDisplay.textContent
    .toString()
    .slice(0, -1);
}

function clear() {
  operationDisplay.textContent = "";
  resultDisplay.textContent = "0";
  previousOperand = "";
  currentOperator = "";
  result = "";
}
