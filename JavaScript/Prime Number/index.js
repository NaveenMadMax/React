function checkPrime() {
    const number = parseInt(document.getElementById("numberInput").value); // Get input from user
  
    if (number <= 1) {
      alert(`${number} is not a prime number.`);
      return;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        alert(`${number} is not a prime number.`);
        return;
      }
    }
  
    alert(`${number} is a prime number.`);
  }