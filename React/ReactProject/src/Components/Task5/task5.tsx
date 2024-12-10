import { useState } from "react";
import "./task5.css";

function UserForm() {
  // State variables for the form fields
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [dateTime, setDateTime] = useState("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [textarea, setTextarea] = useState<string>("");
  const [dropdown, setDropdown] = useState<string>("");

  // Dropdown options
  const countries = ["India", "USA", "UK", "Canada", "Australia"];

  // Error state
  const [errors, setErrors] = useState<{
    [key: string]: string;
  }>({});

  // Validation functions
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/^[a-zA-Z\s]+$/.test(firstName)) {
      newErrors.firstName = "*Enter a proper name*";
    }

    if (!/^[a-zA-Z\s]+$/.test(lastName)) {
      newErrors.lastName = "*Enter a proper name*";
    }

    if (!dob) {
      newErrors.dob = "*Date of Birth is required*";
    }

    if (!dateTime) {
      newErrors.dateTime = "*Date & Time is required*";
    }

    if (!/^\d{10}$/.test(mobileNumber)) {
      newErrors.mobileNumber = "*Enter a valid 10-digit mobile number*";
    }

    if (password.length < 6) {
      newErrors.password = "*Password must be at least 6 characters long*";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "*Enter a valid email*";
    }

    if (!gender) {
      newErrors.gender = "*Gender is required*";
    }

    if (!isChecked) {
      newErrors.checkbox = "*You must agree to the terms and conditions*";
    }

    if (!textarea) {
      newErrors.textarea = "*Comments are required*";
    }

    if (!dropdown) {
      newErrors.dropdown = "*Please select a country*";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

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
    setMobileNumber(String(event.target.value));
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
  const renderDropDown = () => {
    return countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ));
  };
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
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
    }
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
          {errors.firstName && <p className="error">{errors.firstName}</p>}
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
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob">Date of Birth: </label>
          <input type="date" id="dob" value={dob} onChange={handleDobChange} />
          {errors.dob && <p className="error">{errors.dob}</p>}
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
          {errors.dateTime && <p className="error">{errors.dateTime}</p>}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobileNumber">Mobile Number: </label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Enter your mobile number"
          />
          {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
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
          {errors.password && <p className="error">{errors.password}</p>}
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
          {errors.email && <p className="error">{errors.email}</p>}
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
            {errors.gender && <p className="error">{errors.gender}</p>}
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
            {errors.checkbox && <p className="error">{errors.checkbox}</p>}
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
          {errors.textarea && <p className="error">{errors.textarea}</p>}
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
            {renderDropDown()}
          </select>
          {errors.dropdown && <p className="error">{errors.dropdown}</p>}
        </div>

        {/* Submit Button */}
        <button onClick={handleSubmit} className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
