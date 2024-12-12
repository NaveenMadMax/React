import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./task6.css";

function InputList() {
  const [inputValue, setInputValue] = useState<string>(""); // Tracks the input box value
  const [values, setValues] = useState<string[]>([]); // Stores all the added values

  //This function is to handle input value
  const handleAddValue = () => {
    if (inputValue !== "") {
      setValues([...values, inputValue]); // Add the input value to the list
      setInputValue(""); // Clear the input box
    } else {
      alert("Enter any Value");
    }
  };

  // This function is to reset the output
  const handleReset = () => {
    setValues([]);
  };

  const handleDelete = () => {
    setValues(values.slice(0, -1));
  };

  return (
    <Box>
      <Stack
        spacing={2}
        className="inputContainer"
        direction="row"
        alignItems="flex-start"
        sx={{ marginLeft: 0 }} // Explicitly remove margin-left for the Stack
      >
        {/* Input Field */}
        <TextField
          className="inputValue"
          variant="outlined"
          label="Type something"
          value={inputValue} // Current value of the input box
          onChange={(event) => setInputValue(event.target.value)} // Update inputValue as the user types
          sx={{ width: "300px" }}
        />

        {/* Buttons in the same column */}
        <Stack direction="row" spacing={1} sx={{ marginLeft: 0 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddValue}
            sx={{ marginLeft: 0 }}
          >
            Add
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleReset}
            sx={{ marginLeft: 0 }}
          >
            Reset
          </Button>
        </Stack>

        {/* Delete Button */}
        <Button
          variant="outlined"
          color="error"
          onClick={handleDelete}
          sx={{ marginLeft: 0 }}
        >
          Delete
        </Button>
      </Stack>

      {/* Output Container */}
      <Box className="outputContainer" sx={{ marginTop: 3 }}>
        {values.map((value, index) => (
          <Box key={index} sx={{ padding: 1, borderBottom: "1px solid #ccc" }}>
            {value}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default InputList;
