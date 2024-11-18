function greetUser() {
  const now = new Date(); // Get the current date and time
  const hour = now.getHours(); // Extract the current hour (0-23)

  let greeting = ""; // Initialize an empty greeting

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting); // Display the greeting as an alert
}
