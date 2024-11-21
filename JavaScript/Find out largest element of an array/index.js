const findLargest=()=>{
    const input = (document.getElementById('arrayInput').value);
    const numbers = input.split(',').map(Number);
    if (numbers.some(isNaN)) {
        alert ("Please enter valid numbers separated by commas.");
        return;
      }
      let largest = numbers[0]; // Start with the first number
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
          largest = numbers[i]; // Update the largest if current number is greater
        }
      }
      alert (`The largest number is: ${largest}`)
}