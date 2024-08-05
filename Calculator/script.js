const buttons = document.querySelectorAll(".box");
const display = document.getElementById("res");
let currentValue = "";
let operator = "";
let previousValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "Reset") {
      currentValue = "";
      previousValue = "";
      operator = "";
      display.value = "";
    } else if (value === "=") {
      if (currentValue && previousValue && operator) {
        const result = eval(`${previousValue} ${operator} ${currentValue}`);
        display.value = result;
        currentValue = result;
        operator = "";
        previousValue = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (currentValue) {
        operator = value;
        previousValue = currentValue;
        currentValue = "";
      }
    } else {
      currentValue += value;
      display.value = currentValue;
    }
  });
});
