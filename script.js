// Function to change the theme
function changeTheme() {
    const theme = document.getElementById('theme-selector').value;
    document.body.className = ''; // Reset any existing classes
    document.body.classList.add(theme); // Add the selected theme class
  }
  
  // Initialize with default theme
  window.onload = function () {
    document.body.classList.add('dark'); // Set the default theme to dark
  };
  
  // Calculator Logic
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function deleteDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function inputValue(value) {
    document.getElementById('display').value += value;
  }
  
  function calculateResult() {
    const display = document.getElementById('display');
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = 'Error';
    }
  }
  