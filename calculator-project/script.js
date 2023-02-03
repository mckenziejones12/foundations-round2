let previousOperand = "";
let currentOperator = "";
let currentOperand = "";

//grab all btns and display screens
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const negativeBtn = document.getElementById("#negative");
const decimalBtn = document.getElementById("#decimal");
const clearBtn = document.getElementById("#clearBtn");
const equalBtn = document.getElementById("equalBtn");
const operationDisplay = document.getElementById("operationSection");
const resultDisplay = document.getElementById("resultSection");

//add event listeners
numberBtns.forEach((button) =>
  button.addEventListener("click", () => chooseNumber(button.textContent))
);
operatorBtns.forEach((button) =>
  button.addEventListener("click", () => chooseOperator(button.textContent))
);
equalBtn.addEventListener("click", compute);

function chooseNumber(number) {
  currentOperand = number;
  operationDisplay.textContent = `${previousOperand} ${currentOperator} ${currentOperand}`;
}
function chooseOperator(operator) {
  currentOperator = operator;
  previousOperand = currentOperand;
  operationDisplay.textContent = `${previousOperand} ${currentOperator}`;
}

//operator functions
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

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

// function compute() {
//   operationDisplay.textContent = `${previousOperand} ${currentOperator} ${currentOperand} =`;
//   const result = operate(previousOperand, currentOperator, currentOperand);
//   resultDisplay.textContent = result;
// }

console.log(add(2, 2)); //4
console.log(subtract(2, 2)); //0
console.log(multiply(2, 2)); //4
console.log(divide(2, 2)); //1
console.log(operate(2, "-", 2)); //0
