import { useState } from "react";
import './task5.css'
function UserForm() {
  // State variables for the form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [textarea, setTextarea] = useState("");
  const [dropdown, setDropdown] = useState("");

  // Function to handle form submission
  const handleSubmit = () => {
    // Show alert with the entered details
    alert(`
      First Name: ${firstName}
      Last Name: ${lastName}
      DOB: ${dob}
      Date & Time: ${dateTime}
      Mobile Number: ${mobileNumber}
      Password: ${password}
      Email: ${email}
      Gender: ${gender}
      Checkbox: ${isChecked ? "Checked" : "Unchecked"}
      Text Area: ${textarea}
      Dropdown: ${dropdown}
    `);
  };

  return (
    <div className="formContainer">
      <form>
        {/* First Name */}
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            placeholder="Enter your first name"
            style={{marginLeft:"10px"}}
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            placeholder="Enter your last name"
            style={{marginLeft:"10px"}}
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            style={{marginLeft:"10px"}}
          />
        </div>

        {/* Date & Time */}
        <div>
          <label htmlFor="dateTime">Date & Time:</label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={(event) => setDateTime(event.target.value)}
            style={{marginLeft:"10px"}}
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={(event) => setMobileNumber(event.target.value)}
            placeholder="Enter your mobile number"
            style={{marginLeft:"10px"}}
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            style={{marginLeft:"10px"}}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email"
            style={{marginLeft:"10px"}}
          />
        </div>

        {/* Radio Buttons */}
        <div>
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(event) => setGender(event.target.value)}
              style={{marginLeft:"10px"}}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(event) => setGender(event.target.value)}
              style={{marginLeft:"10px"}}
            />
            Female
          </div>
        </div>

        {/* Checkbox */}
        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
              style={{marginLeft:"10px"}}
            />
            I agree to the terms and conditions
          </label>
        </div>

        {/* Text Area */}
        <div style={{display:"flex"}}>
          <label htmlFor="textarea">Comments:</label>
          <textarea
            id="textarea"
            value={textarea}
            onChange={(event) => setTextarea(event.target.value)}
            placeholder="Enter your comments here"
            style={{marginLeft:"10px",height:"50px"}}
          ></textarea>
        </div>

        {/* Dropdown */}
        <div>
          <label htmlFor="dropdown">Country:</label>
          <select
            id="dropdown"
            value={dropdown}
            onChange={(event) => setDropdown(event.target.value)}
            style={{marginLeft:"10px"}}
          >
            <option value="">--Select--</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
