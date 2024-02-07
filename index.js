// Get the input box
const inputBox = document.getElementById('inputBox');

// Function to clear the input box
function clearInput() {
  inputBox.value = '';
}

// Function to append a value to the input box
function appendValue(value) {
  inputBox.value += value;
}

// Function to perform the calculation
function calculate() {
  try {
    const result = eval(inputBox.value); // Using eval is not recommended in production due to security concerns. It's being used here for simplicity.
    inputBox.value = result;
  } catch (error) {
    inputBox.value = 'Error';
  }
}
