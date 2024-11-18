function checkArmstrong() {
    let number = parseInt(document.getElementById("numberInput").value); // Get the number from input
    let sum = 0;
    const originalNumber = number;
  
    // Find how many digits the number has
    const numDigits = Math.floor(Math.log10(number) + 1);
  
    // Loop to check each digit
    while (number > 0) {
      const digit = number % 10; // Get the last digit
      sum = sum + (digit ** numDigits); // Add digit raised to the power of numDigits
      number = Math.floor(number / 10); // Remove the decimal number after dot
    }
  
    // Check if the sum of digits raised to the power is equal to the original number
    if (sum === originalNumber) {
      alert(`${originalNumber} is an Armstrong number.`);
    } else {
      alert(`${originalNumber} is not an Armstrong number.`);
    }
  }
  