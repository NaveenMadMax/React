import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

const UserForm = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [errorFirstName, setFirstNameError] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [errorLastName, setLastNameError] = useState<string>("");

  const [dob, setDob] = useState<string>("");
  const [errorDob, setDobError] = useState<string>("");

  const [dateTime, setDateTime] = useState<string>();
  const [errorDateTime, setDateTimeError] = useState<string>("");

  const [mobileNumber, setMobileNumber] = useState<number>();
  const [errorMobileNumber, setMobileNumberError] = useState<string>("");

  const [password, setPassword] = useState<string>("");
  const [errorPassword, setPasswordError] = useState<string>("");

  const [email, setEmail] = useState<string>("");
  const [errorEmail, setEmailError] = useState<string>("");

  const [gender, setGender] = useState<string>("");
  const [errorGender, setGenderError] = useState<string>("");

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [errorCheckbox, setErrorCheckbox] = useState<string>("");

  const [comments, setComments] = useState<string>("");
  const [errorComments, setErrorComments] = useState<string>("");

  const [dropdown, setDropdown] = useState<string>("");

  // Validation logic
  const validateFirstName = (value: string) => {
    if (value === "") {
      setFirstNameError("First Name is required.");
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      setFirstNameError("First Name can only contain letters and spaces.");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = (value: string) => {
    if (value === "") {
      setLastNameError("Last Name is required.");
    } else if (!/^[a-zA-Z\s]+$/.test(value)) {
      setLastNameError("Last Name can only contain letters and spaces.");
    } else {
      setLastNameError("");
    }
  };

  const validateDob = (value: string) => {
    if (value === "") {
      setDobError("Date of Birth is required.");
    } else {
      setDobError("");
    }
  };

  const validateDateTime = (value: string) => {
    if (value === "") {
      setDateTimeError("Date & Time is required.");
    } else {
      setDateTimeError("");
    }
  };

  const validateMobileNumber = (value: string) => {
    if (value === "") {
      setMobileNumberError("Mobile Number is required.");
    } else if (!/^\d{10}$/.test(value)) {
      setMobileNumberError("Mobile Number should be 10 digits.");
    } else {
      setMobileNumberError("");
    }
  };

  const validatePassword = (value: string) => {
    if (value === "") {
      setPasswordError("Password is required.");
    } else if (value.length < 6) {
      setPasswordError("Password should be at least 6 characters.");
    } else {
      setPasswordError("");
    }
  };

  const validateEmail = (value: string) => {
    if (value === "") {
      setEmailError("Email is required.");
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)) {
      setEmailError("Invalid email address.");
    } else {
      setEmailError("");
    }
  };

  const validateGender = (value: string) => {
    if (value === "") {
      setGenderError("Gender is required.");
    } else {
      setGenderError("");
    }
  };

  const validateComments = (value: string) => {
    if (value === "") {
      setErrorComments("Comments cannot be empty.");
    } else {
      setErrorComments("");
    }
  };

  const validateCheckbox = (value: boolean) => {
    if (!value) {
      setErrorCheckbox("You must agree to the terms and conditions.");
    } else {
      setErrorCheckbox("");
    }
  };

  const validateForm = () => {
    return !(
      errorFirstName ||
      errorLastName ||
      errorDob ||
      errorDateTime ||
      errorMobileNumber ||
      errorPassword ||
      errorEmail ||
      errorGender ||
      errorCheckbox ||
      errorComments ||
      !firstName ||
      !lastName ||
      !dob ||
      !dateTime ||
      !mobileNumber ||
      !password ||
      !email ||
      !gender ||
      !comments ||
      !isChecked ||
      !dropdown
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
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
        Comments: ${comments}
        Country: ${dropdown}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <form onSubmit={handleSubmit}>
        {/* First Name Input */}
        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(event) => {
            setFirstName(event.target.value);
            validateFirstName(event.target.value);
          }}
          error={!!errorFirstName}
          helperText={errorFirstName}
          sx={{ mb: 2 }}
        />

        {/* Last Name Input */}
        <TextField
          fullWidth
          label="Last Name"
          value={lastName}
          onChange={(event) => {
            setLastName(event.target.value);
            validateLastName(event.target.value);
          }}
          error={!!errorLastName}
          helperText={errorLastName}
          sx={{ mb: 2 }}
        />

        {/* DOB Input */}
        <TextField
          fullWidth
          label="Date of Birth"
          type="date"
          value={dob}
          onChange={(event) => {
            setDob(event.target.value);
            validateDob(event.target.value);
          }}
          error={!!errorDob}
          helperText={errorDob}
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        {/* Date & Time Input */}
        <TextField
          fullWidth
          label="Date & Time"
          type="datetime-local"
          value={dateTime}
          onChange={(event) => {
            setDateTime(event.target.value);
            validateDateTime(event.target.value);
          }}
          error={!!errorDateTime}
          helperText={errorDateTime}
          sx={{ mb: 2 }}
          InputLabelProps={{ shrink: true }}
        />

        {/* Mobile Number Input */}
        <TextField
          fullWidth
          label="Mobile Number"
          type="tel"
          value={mobileNumber}
          onChange={(event) => {
            setMobileNumber(Number(event.target.value));
            validateMobileNumber(event.target.value);
          }}
          error={!!errorMobileNumber}
          helperText={errorMobileNumber}
          sx={{ mb: 2 }}
        />

        {/* Password Input */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
            validatePassword(event.target.value);
          }}
          error={!!errorPassword}
          helperText={errorPassword}
          sx={{ mb: 2 }}
        />

        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            validateEmail(event.target.value);
          }}
          error={!!errorEmail}
          helperText={errorEmail}
          sx={{ mb: 2 }}
        />

        {/* Gender Input */}
        <FormControl sx={{ mb: 2, color:"blue" }}>
        <p style={{ color: "#616161" }}>Gender</p>
          <RadioGroup
           row
            value={gender}
            onChange={(event) => {
              setGender(event.target.value);
              validateGender(event.target.value);
            }}
          >
            <FormControlLabel
              value="Male"
              control={<Radio />}
              label="Male"
            />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
          {errorGender && <div style={{ color: "red" }}>{errorGender}</div>}
        </FormControl>

        {/* Checkbox Input */}
        <FormControlLabel
          control={<Checkbox checked={isChecked} onChange={(event) => {
            setIsChecked(event.target.checked);
            validateCheckbox(event.target.checked);
          }} />}
          label="I agree to the terms and conditions"
          sx={{ mb: 2, color:"blue" }}
        />

        {/* Comments Input */}
        <TextField
          fullWidth
          label="Comments"
          value={comments}
          onChange={(event) => {
            setComments(event.target.value);
            validateComments(event.target.value);
          }}
          error={!!errorComments}
          helperText={errorComments}
          sx={{ mb: 2 }}
        />

        {/* Country Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Country</InputLabel>
          <Select
            value={dropdown}
            onChange={(event) => setDropdown(event.target.value)}
             label="Country"
          >
            <MenuItem value="">Select Country</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
          </Select>
        </FormControl>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!validateForm()}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
