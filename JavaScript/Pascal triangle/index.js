function generatePascalsTriangle() {
  const rows = parseInt(document.getElementById("rowsInput").value); // Get the number of rows from input
  if (rows <= 0) {
    alert("Please enter a positive number."); // Handle invalid input
    return;
  }

  let result = ""; // Initialize an empty string to store the triangle

  for (let i = 0; i < rows; i++) {
    let value = 1; // Start every row with 1

    for (let j = 0; j <= i; j++) {
      result += value ; // Add the current value to the result
      value = value * (i - j) / (j + 1); // Update the value for the next column
    }

    result += "\n"; // Move to the next row after completing one row
  }

  alert(`Pascal's Triangle:\n${result}`); // Display Pascal's Triangle
}
