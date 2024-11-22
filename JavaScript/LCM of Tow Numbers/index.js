const findLCM = () => {
    // Get numbers from input
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
  
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
      alert("Please enter valid positive numbers.");
      return;
    }
  
    let lcm = Math.max(num1, num2); // Start checking from the larger number
  
    // Incrementally check for the LCM
    while (true) {
      if (lcm % num1 === 0 && lcm % num2 === 0) {
        alert(`The LCM of ${num1} and ${num2} is: ${lcm}`);
        break;
      }
      lcm++; // Increment the potential LCM
    }
  };
  