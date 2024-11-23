// Arrow function to calculate the sum of an array
const calculateSum = () => {
    // Get input from the user
    const input = document.getElementById("arrayInput").value;
  
    // Convert input string into an array of numbers
    const numbers = input.split(',').map(Number);
  
    // Calculate the sum using reduce
    const sum = numbers.reduce((total, num) => total + num, 0);
  
    // Display the result
    alert(`The sum of all numbers is: ${sum}`);
  };
  