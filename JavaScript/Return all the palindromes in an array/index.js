const findPalindromeNumbers = () => {
    const input = document.getElementById("arrayInput").value; // Get user input
    const numbers = input.split(',').map(num => num.trim());  // Convert input into an array and trim spaces
  
    // Arrow function to check palindrome numbers
    const palindromes = numbers.filter(num => num === num.split('').reverse().join(''));
  
    alert(`Palindrome Numbers: ${palindromes.join(', ')}`); // Show the palindromes
  };
  