function deleteElement() {
    // Get user inputs
    const arrayInput = (document.getElementById("arrayInput").value); // Array input
    const position = (document.getElementById("positionInput").value); // Desired position
  
    // Convert input string to array
    const array = arrayInput.split(',').map(Number);
  
    // Validate the position
    if (position < 1 || position > array.length) {
      alert("Invalid position. Please enter a valid position.");
      return;
    }
  
    // Delete the element at the desired position (1-based index)
    const deletedElement = array.splice(position - 1, 1); // Remove 1 element at position-1 index
  
    // Show the updated array and the deleted element
    alert(`Deleted Element: ${deletedElement}\nUpdated Array: ${array.join(', ')}`);
  }
  