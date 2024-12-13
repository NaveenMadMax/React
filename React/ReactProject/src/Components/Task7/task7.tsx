import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";

function UserForm() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [dateTime, setDateTime] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [textarea, setTextarea] = useState<string>("");
  const [dropdown, setDropdown] = useState<string>("");
  const countries = ["India", "USA", "UK", "Canada", "Australia"];
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!/^[a-zA-Z\s]+$/.test(firstName))
      newErrors.firstName = "*Enter a proper name*";
    if (!/^[a-zA-Z\s]+$/.test(lastName))
      newErrors.lastName = "*Enter a proper name*";
    if (!dob) newErrors.dob = "*Date of Birth is required*";
    if (!dateTime) newErrors.dateTime = "*Date & Time is required*";
    if (!/^\d{10}$/.test(mobileNumber))
      newErrors.mobileNumber = "*Enter a valid 10-digit mobile number*";
    if (password.length < 6)
      newErrors.password = "*Password must be at least 6 characters long*";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "*Enter a valid email*";
    if (!gender) newErrors.gender = "*Gender is required*";
    if (!isChecked)
      newErrors.checkbox = "*You must agree to the terms and conditions*";
    if (!textarea) newErrors.textarea = "*Comments are required*";
    if (!dropdown) newErrors.dropdown = "*Please select a country*";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
        Comments: ${textarea}
        Country: ${dropdown}
      `);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <form>
        {/* First Name */}
        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={!!errors.firstName}
          helperText={errors.firstName}
          sx={{ mb: 2 }}
        />

        {/* Last Name */}
        <TextField
          fullWidth
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={!!errors.lastName}
          helperText={errors.lastName}
          sx={{ mb: 2 }}
        />

        {/* Date of Birth */}
        <TextField
          fullWidth
          label="Date of Birth"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          error={!!errors.dob}
          helperText={errors.dob}
          sx={{
            mb: 2,
            "& input::-webkit-calendar-picker-indicator": {
              cursor: "pointer", 
              filter:
                "invert(50%) sepia(100%) saturate(200%) hue-rotate(200deg)",
            },
          }}
        />

        {/* Date & Time */}
        <TextField
          fullWidth
          label="Date & Time"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          error={!!errors.dateTime}
          helperText={errors.dateTime}
          sx={{ mb: 2,
            "& input::-webkit-calendar-picker-indicator": {
              cursor: "pointer", 
              filter:
                "invert(50%) sepia(100%) saturate(200%) hue-rotate(200deg)",
            },  }}
        />

        {/* Mobile Number */}
        <TextField
          fullWidth
          label="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          error={!!errors.mobileNumber}
          helperText={errors.mobileNumber}
          sx={{ mb: 2 }}
        />

        {/* Password */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ mb: 2 }}
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />

        {/* Gender */}
        <FormControl error={!!errors.gender} sx={{ mb: 2 }}>
          <p style={{ color: "#616161" }}>Gender</p>
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel
              value="Male"
              control={<Radio />}
              label="Male"
              sx={{ color: "#616161" }}
            />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
              sx={{ color: "#616161" }}
            />
          </RadioGroup>
          {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
        </FormControl>

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
          }
          label="I agree to the terms and conditions"
          sx={{ color: "#616161", mb: 3 }}
        />
        {errors.checkbox && (
          <FormHelperText error>{errors.checkbox}</FormHelperText>
        )}

        {/* Comments */}
        <TextField
          fullWidth
          label="Comments"
          multiline
          rows={3}
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
          error={!!errors.textarea}
          helperText={errors.textarea}
          sx={{ mb: 2 }}
        />

        {/* Dropdown */}
        <FormControl fullWidth error={!!errors.dropdown} sx={{ mb: 2 }}>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            value={dropdown}
            onChange={(e) => setDropdown(e.target.value)}
            label="Country" // Ensures the label aligns properly
          >
            {countries.map((country, index) => (
              <MenuItem key={index} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
          {errors.dropdown && (
            <FormHelperText>{errors.dropdown}</FormHelperText>
          )}
        </FormControl>

        {/* Submit Button */}
        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default UserForm;
