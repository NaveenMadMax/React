// Arrow function to find odd numbers
const findOddNumbers = () => {
    // Get input from the user
    const input = document.getElementById("arrayInput").value;
  
    // Convert input string into an array of numbers
    const numbers = input.split(',').map(Number);
  
    // Filter odd numbers
    const oddNumbers = numbers.filter(num => num % 2 !== 0);
  
    // Display the result
    alert(`Odd numbers in the array: ${oddNumbers.join(', ')}`);
  };
  