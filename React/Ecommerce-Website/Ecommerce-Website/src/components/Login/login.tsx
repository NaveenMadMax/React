import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password123") {
      navigate("/products");
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div className="login__Container">
      <div className="login__Card">
        <h2>Login</h2>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && <p className="error__Text">{error}</p>}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          className="login__Button"
        >
          Login
        </Button>
        <p>
          Don't haven an account?{" "}
          <a onClick={() => navigate("/signup")}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default login;
