function findLargestAndSmallest() {
    const input = document.getElementById("arrayInput").value;
  
    // Convert the input string to an array of numbers
    const numbers = input.split(',').map(Number);
  
    // Validate the input
    if (numbers.some(isNaN) || numbers.length === 0) {
      alert("Please enter valid numbers separated by commas.");
      return;
    }
  
    let largest = numbers[0];
    let smallest = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
        largest = numbers[i];
      }
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
  
    alert(`Largest: ${largest}, Smallest: ${smallest}`);
  }
  