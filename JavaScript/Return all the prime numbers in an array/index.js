const findPrimes = () => {
    const input = document.getElementById("arrayInput").value;
    const numbers = input.split(',').map(Number);
  
    // Validate input
    if (numbers.some(isNaN)) {
      alert("Please enter valid numbers separated by commas.");
      return;
    }
  
    // Arrow function to check if a number is prime
    const isPrime = (num) => {
      if (num < 2) return false; // Eliminate numbers less than 2
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
      }
      return true; 
    };
  
    // Filter the prime numbers using the isPrime function
    const primeNumbers = numbers.filter(isPrime);
  
    // Display the result
    alert(`Prime Numbers: ${primeNumbers.join(', ')}`);
  };
  