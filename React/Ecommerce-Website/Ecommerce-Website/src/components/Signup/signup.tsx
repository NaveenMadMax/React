import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<number>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const navigate = useNavigate();

  const handleSignup = () => {
    let valid = true;

    if (!name) {
      setNameError("Full Name is required");
      valid = false;
    } else {
      setNameError("");
    }

    if (!phone) {
      setPhoneError("Phone number is required");
      valid = false;
    } else if (phone.toString().length !== 10) {
      setPhoneError("Phone number must be 10 digits");
      valid = false;
    } else {
      setPhoneError("");
    }

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
      setEmailError("Enter a valid email address");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      alert("Signup successful! Please Login.");
      navigate("/");
    }
  };

  return (
    <div className="signup__Container">
      <div className="signup__Card">
        <h2>Sign Up</h2>

        <TextField
          fullWidth
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          error={!!nameError}
          helperText={nameError}
        />

        <TextField
          fullWidth
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(Number(e.target.value))}
          type="number"
          margin="normal"
          error={!!phoneError}
          helperText={phoneError}
        />

        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          margin="normal"
          error={!!emailError}
          helperText={emailError}
        />

        <TextField
          fullWidth
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          margin="normal"
          error={!!passwordError}
          helperText={passwordError}
        />

        <Button className="submit-button" fullWidth variant="contained" color="primary" onClick={handleSignup}>
          Submit
        </Button>

        <Button fullWidth variant="outlined" color="secondary" onClick={() => navigate("/")} sx={{ marginTop: "10px" }}>
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default Signup;
