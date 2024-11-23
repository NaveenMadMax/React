// Arrow function to convert strings to title caps
const convertToTitleCaps = () => {
    // Get input from the user
    const input = document.getElementById("stringArrayInput").value;
  
    // Split input into an array of strings
    const stringArray = input.split(',');
  
    // Convert each string to title caps
    const titleCasedArray = stringArray.map(str => {
      const lowerCase = str.trim().toLowerCase(); // Convert to lowercase
      return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1); // Capitalize first letter
    });
  
    // Display the result
    alert(`Title-cased strings: ${titleCasedArray.join('  ,  ')}`);
  };
  