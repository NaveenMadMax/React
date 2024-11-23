const findHCF = () => {
    // Get numbers from input
    const num1 = (document.getElementById("num1").value);
    const num2 = (document.getElementById("num2").value);
  
    // Validate input
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }
  
    // Start with the smaller number
    let hcf = Math.min(num1, num2);
  
    // Check divisors from hcf down to 1
    while (hcf > 0) {
      if (num1 % hcf === 0 && num2 % hcf === 0) {
        alert(`The HCF of ${num1} and ${num2} is: ${hcf}`);
        break;
      }
      hcf--;
    }
  };
  