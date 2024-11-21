function findSecondLargest() {
    const input = document.getElementById("numbersInput").value;
    const numbers = input.split(',').map(Number);// Convert input string into an array of numbers
  
    // Validate input
    if (numbers.some(isNaN) || numbers.length < 2) {
      alert("Please enter at least two valid numbers separated by commas.");
      return;
    }
    const sortNumbers = [...new Set(numbers)].sort((a, b) => b - a); // Remove duplicates and sort the array in descending order
    const secondLargest = sortNumbers[1]; // The second largest number is the second element in the sorted array
    alert(`The second largest number is: ${secondLargest}`); 
  }
  