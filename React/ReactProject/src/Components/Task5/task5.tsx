import { useState } from "react";
import "./task5.css";

  const UserForm=()=> {
  // State variables for the form fields
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<number>();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [textarea, setTextarea] = useState<string>("");
  const [dropdown, setDropdown] = useState<string>("");

  // Handlers for input changes
  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDob(event.target.value);
  };

  const handleDateTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(event.target.value);
  };

  const handleMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(Number(event.target.value));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextarea(event.target.value);
  };

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDropdown(event.target.value);
  };
  
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
        <div className="firsName">
          <label htmlFor="firstName">First Name: </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Enter your first name"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Enter your last name"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob">Date of Birth: </label>
          <input type="date" id="dob" value={dob} onChange={handleDobChange} />
        </div>

        {/* Date & Time */}
        <div>
          <label htmlFor="dateTime">Date & Time: </label>
          <input
            type="datetime-local"
            id="dateTime"
            value={dateTime}
            onChange={handleDateTimeChange}
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobileNumber">Mobile Number: </label>
          <input
            type="number"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Enter your mobile number"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Radio Buttons */}
        <div>
          <label>Gender: </label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleGenderChange}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleGenderChange}
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
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
        </div>

        {/* Text Area */}
        <div style={{display:"flex", flexWrap:"wrap", width:"350px"}}>
          <label htmlFor="textarea" >Comments: </label>
          <textarea style={{height:"60px", width:"260px"}}
            id="textarea"
            value={textarea}
            onChange={handleTextareaChange}
            placeholder="Enter your comments here"
          ></textarea>
        </div>

        {/* Dropdown */}
        <div>
          <label htmlFor="dropdown">Country: </label>
          <select
            id="dropdown"
            value={dropdown}
            onChange={handleDropdownChange}
          >
            <option value="">--Select--</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>
        </div>
        {/* Submit Button */}
        <button onClick={handleSubmit} className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
