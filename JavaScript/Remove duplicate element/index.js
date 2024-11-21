function removeDuplicates() {
    // Get the input from the user
    const input = document.getElementById("arrayInput").value;

    // Convert input string to an array of numbers
    const numbers = input.split(',').map(Number);

    // Remove duplicates using a Set, then convert it back to an array
    const uniqueNumbers = [...new Set(numbers)];

    // Display the result in an alert
    alert(`Array without duplicates: ${uniqueNumbers.join(', ')}`);
  }