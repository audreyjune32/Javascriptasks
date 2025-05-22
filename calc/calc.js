const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
console.log(typeof buttons);
let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    switch (value) {
      case "AC":
        currentInput = "";
        break;
      case "DEl":
        currentInput = currentInput.slice(0, -1);
        break;
      case "=":
        try {
          currentInput = eval(currentInput).toString();
        } catch (error) {
          currentInput = "Error";
        }
        break;
      default:
        currentInput += value;
    }

    display.value = currentInput;
  });
});
