function generatePascalsTriangle() {
  const rows = parseInt(document.getElementById("rowsInput").value); // Get the number of rows from input
  if (rows <= 0) {
    alert("Please enter a positive number.");
    return;
  }

  const triangle = []; 

  for (let i = 0; i < rows; i++) {
    const row = []; // Initialize a new row
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        // First and last elements of each row are 1
        row.push(1);
      } else {
        // Middle elements are the sum of the two numbers above them
        row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
      }
    }
    triangle.push(row); // Add the row to the triangle
  }

  // Display the triangle
  let result = "";
  for (const row of triangle) {
    result = result + row.join(" ") + "\n"; // Convert each row to a space-separated string
  }
  alert(`Pascal's Triangle:\n${result}`);
}
