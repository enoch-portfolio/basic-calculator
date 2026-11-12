const buttonsE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result");

for (let i = 0; i < buttonsE1.length; i++){
    buttonsE1[i].addEventListener("click", () => {
      const buttonValue = buttonsE1[i].textContent;
      
      // Check for new features first
      if(buttonValue === "C"){
        clearResult();
      } else if (buttonValue === "="){
        calculateResult();
      } else if (buttonValue === "DEL"){
        deleteLastCharacter();
      } else {
        // This handles numbers, operators, and parentheses
        appendValue(buttonValue);
      }
    });
}

function clearResult(){
    inputFieldE1.value = "";
}

function calculateResult(){
    // The eval() function will handle parentheses automatically
    inputFieldE1.value = eval(inputFieldE1.value);
}

function appendValue(buttonValue){
    inputFieldE1.value += buttonValue;
}

// New function to handle deletion
function deleteLastCharacter() {
    inputFieldE1.value = inputFieldE1.value.slice(0, -1);
}

function calculateResult() {
    let expression = inputFieldE1.value;

    // 1. Handle Square Root: Converts √ (16) to Math.sqrt(16)
    expression = expression.replace(/√\(([^)]+)\)/g, "Math.sqrt($1)");

    // 2. Handle Square: Converts (^2) to **2 
    // This looks for a number or bracketed expression followed by ^2
    expression = expression.replace(/(\d+)\^2/g, "Math.pow($1, 2)");

    try {
        inputFieldE1.value = eval(expression);
    } catch (error) {
        inputFieldE1.value = "Error";
    }
}