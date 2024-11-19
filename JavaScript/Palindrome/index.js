function checkNumber() {
    let number = parseInt(document.getElementById("numberInput").value); // Get the input value
    const originalNumber = number; // Store the original number for comparison
    let reversedNumber = 0; // Initialize the reversed number
  
    while (number > 0) { // Loop until the number becomes 0
      const lastDigit = number % 10; // Get the last digit
      reversedNumber = reversedNumber * 10 + lastDigit; // Build the reversed number
      number = Math.floor(number / 10); // Remove the last digit
    }
  
    // Check if the original number is equal to the reversed number
    if (originalNumber === reversedNumber) {
      alert(`${originalNumber} is a palindrome number.`);
    } else {
      alert(`${originalNumber} is not a palindrome number.`);
    }
  }