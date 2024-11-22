function insertElement() {
    // Get user inputs
    const arrayInput = document.getElementById("arrayInput").value; // Array input
    const element = document.getElementById("elementInput").value; // Element to insert
    const position =document.getElementById("positionInput").value; // Desired position
  
    // Convert input string to array
    const array = arrayInput.split(',').map(Number);
  
    // Validate the position
    if (position < 1 || position > array.length + 1) {
      alert("Invalid position. Please enter a valid position.");
      return;
    }
  
    // Insert the element at the desired position (1-based index)
    array.splice(position - 1, 0, element); // Insert `element` at position-1 index
  
    // Show the updated array
    alert(`Updated Array: ${array.join(', ')}`);
  }
  