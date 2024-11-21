function findSecondSmallest() {
  const input = document.getElementById("arrayInput").value;

  const numbers = input.split(",").map(Number); // Convert input string into an array of numbers

  // Validate input
  if (numbers.some(isNaN) || numbers.length < 2) {
    alert("Please enter at least two valid numbers separated by commas.");
    return;
  }

  const uniqueNumbers = [...new Set(numbers)].sort((a, b) => a - b); // Remove duplicates and sort the array in ascending order

  const secondSmallest = uniqueNumbers[1]; // The second smallest number is the second element in the sorted array

  alert(`The second smallest number is: ${secondSmallest}`);
}
