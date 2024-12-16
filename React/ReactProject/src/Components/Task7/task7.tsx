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


 const UserForm=()=> {
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
        Comments: ${textarea}
        Country: ${dropdown}
      `);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "0 auto", padding: 2 }}>
      <form>
        {/* First Name */}
        <TextField
          fullWidth
          label="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Last Name */}
        <TextField
          fullWidth
          label="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Date of Birth */}
        <TextField
          fullWidth
          label="Date of Birth"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={dob}
          onChange={(event) => setDob(event.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Date & Time */}
        <TextField
          fullWidth
          label="Date & Time"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          value={dateTime}
          onChange={(event) => setDateTime(event.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Mobile Number */}
        <TextField
          fullWidth
          label="Mobile Number"
          type="number"
          value={mobileNumber}
          onChange={(event) => setMobileNumber(Number(event.target.value))}
          sx={{ mb: 2 }}
        />

        {/* Password */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Gender */}
        <FormControl>
          <p style={{ color: "#616161" }}>Gender</p>
          <RadioGroup
            row
            value={gender}
            onChange={(event) => setGender(event.target.value)}
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
        </FormControl>

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
            />
          }
          label="I agree to the terms and conditions"
          sx={{ color: "#616161", mb: 3 }}
        />

        {/* Comments */}
        <TextField
          fullWidth
          label="Comments"
          multiline
          value={textarea}
          onChange={(event) => setTextarea(event.target.value)}
          sx={{ mb: 2 }}
        />

        {/* Dropdown */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            value={dropdown}
            onChange={(event) => setDropdown(event.target.value)}
            label="Country" // Ensures the label aligns properly
          >
            <MenuItem value="">country</MenuItem>
            <MenuItem value="India">India</MenuItem>
            <MenuItem value="UK">UK</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
          </Select>
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
