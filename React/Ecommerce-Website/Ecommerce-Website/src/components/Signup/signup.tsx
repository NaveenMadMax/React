import { useState } from "react";
import { Signup } from "../../entity/signup";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import './signup.css'
const signup = () => {
  const [user, setUser] = useState<Signup>({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSignup = () => {
    alert("Signup successful! Please Login.");
    navigate("/");
  };
  return (
    <div className="signup__Container">
      <div className="signup__Card">
        <h2>Sign Up</h2>
        <TextField
          fullWidth
          label="Full Name"
          name="name"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Phone Number"
          name="phone"
          variant="outlined"
          type="number"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          label="Create Password"
          name="password"
          variant="outlined"
          margin="normal"
          onChange={handleChange}
        />
        <Button className="submit__Button" fullWidth variant="contained" color="primary" onClick={handleSignup}>
          Submit
        </Button>
        <Button className="back__Button" fullWidth variant="outlined" color="secondary" onClick={() => navigate("/")} sx={{ marginTop: "10px" }}>
          Back to Login
        </Button>
      </div>
    </div>
  );
};

export default signup;
