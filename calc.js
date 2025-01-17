let currentInput = ''; // To store current input
let previousInput = ''; // To store the previous input before operation
let operation = null; // To store the current operation (+, -, *, /)

const display = document.getElementById('display');

// Function to update the display
function updateDisplay() {
  display.value = currentInput;
}

// Function to append a number to the display
function appendNumber(number) {
  currentInput += number.toString();
  updateDisplay();
}

// Function to set the operation (+, -, *, /)
function setOperation(op) {
  if (currentInput === '') return; // Avoid setting operation with empty input
  if (previousInput !== '') {
    calculateResult();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

// Function to calculate the result
function calculateResult() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
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
      if (current === 0) {
        result = 'Error'; // Prevent division by zero
      } else {
        result = prev / current;
      }
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = '';
  updateDisplay();
}

// Function to clear the display
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

let comment=document.getElementById("feedback");
let sendbutton=document.getElementById("send");

sendbutton.addEventListener("click",()=>{
    // feedbacklist.removeChild();
    let x=comment.value;
    if(x!==null){
        alert("successfully created");
        document.getElementById("feedback").value=" ";
        // return false;
    }
    location.reload();

});