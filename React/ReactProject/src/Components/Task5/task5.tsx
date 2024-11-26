import { useState } from "react";
import './task5.css'

function UserForm() {
  // State variables for the form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nDOB: ${dob}`);
  };

  return (
    <div className="formContainer">
      <form>
        <div className="firstNameInputBox">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Enter your first name"
          />
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Enter your last name"
          />
        </div>
        <div className="dobInputField">
          <label htmlFor="dob">Date of Birth: </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
          />
        </div>
        <button className="submitButton" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
